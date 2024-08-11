from django.db import models
from django.contrib.auth.models import User
import datetime

#purpose: the main info of each contest which is being held  
class Contest(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="contests")

    def __str__(self):
        return f"{self.name} - {self.start_date}"
    
    def is_going(self):
        now = datetime.now()
        return now>= self.start_date and now <= self.end_date
    
    def get_member_count(self):
        return self.members.count()

#purpose: each contest has some problems, each problem has some data to be stored ...     
class Problem(models.Model):
    title = models.CharField(max_length=255)
    statement = models.TextField()
    input_format = models.TextField()
     # some guide to tell the cotestants what kind of input, will be tested on their code
    output_format = models.TextField()
    #some guide to tell the contetants waht kind of output is expected form thier code
    constraints = models.TextField()
    #the contestants about the range of input values they should handle and any other restrictions they need to consider while writing their solution.
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE, related_name="problems")
    max_score = models.IntegerField()

    def __str__(self):
        return self.title

#purpose: each problem should have a testcase 
class TestCase(models.Model):
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE, related_name="test_cases")
    input_data = models.TextField()
    expected_output = models.TextField()
    is_sample = models.BooleanField(default=False) 
     # True for sample cases shown in problem description otherwise they are hidden and only used for testing purposes and scoring in the backend

    def __str__(self):
        return f"TestCase for {self.problem.title}"


#purpose: to keep track of the user submissions and scores
class Submission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="submissions")
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE, related_name="submissions")
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE, related_name="submissions")
    code = models.TextField()
    language = models.CharField(max_length=50)  # e.g., 'Python', 'C++', etc.
    submission_time = models.DateTimeField(auto_now_add=True)
    score = models.IntegerField(null=True, blank=True)
    # according to the number of tetcases which is done and the result of the testcases the score will be calculated
    verdict = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Accepted', 'Accepted'), ('Wrong Answer', 'Wrong Answer'), ('Runtime Error', 'Runtime Error'), ('Time Limit Exceeded', 'Time Limit Exceeded')])
    # To tell the user what was the result of teting, wheather thier code is correct, buggy, not meeting the expectations, or maybe too slow and weak algorithm

    def __str__(self):
        return f"Submission by {self.user.username} for {self.problem.title}"
    

#purpose: well we should keep track of the users in contests, we should know who has enrolled
class ContestParticipation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="participations")
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE, related_name="participants")
    joined_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'contest')

    def __str__(self):
        return f"{self.user.username} in {self.contest.title}"


# purpose: Participant Rankings: The order of participants based on their total score and submission times.
#Contest Winners: The top participants based on their performance.
#Real-Time Updates: During the contest, the leaderboard can be updated in real-time to reflect the latest scores and rankings as participants submit solutions.
class Leaderboard(models.Model):
    contest = models.ForeignKey(Contest, on_delete=models.CASCADE, related_name="leaderboard")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_score = models.IntegerField(default=0)
    last_submission_time = models.DateTimeField()
    # It is used for tie-breaking purposes: if two users have the same total score, the one with the earlier last_submission_time will rank higher.
    class Meta:
        unique_together = ('contest', 'user')
        ordering = ['-total_score', 'last_submission_time']
    #ensure that the ranking is both contest-specific and correctly ordered.    

    def __str__(self):
        return f"Leaderboard for {self.contest.title}"

