import React from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html'; 
import Creator from './Creator';

function Response(props) {

    const {data} = props

    function deleteComment(CommentId) {
        axios.delete("https://server.mathbot.ir/api/comments/" + CommentId + "/delete/").then(response => {
            console.log('Resource deleted successfully:', response.data);
            alert("کامنت با موفقیت پاک شد");
            window.location.reload();
          })
          .catch(error => {
            console.error('Error deleting resource:', error);
            alert("کامنت پاک نشد! یه مشکلی وجود داره");
          })
    }

    return (
        <div>
            {data.toReversed().map((item)=> (
                <div className="col-md-12 col-xs-12 responsive-box">
                <div className="question-answer-big">
                    <Creator data = {item.creator} />
                    <h6>&nbsp; {item.created_at}</h6>
                    <p className="question-answer-big-p">{renderHTML(item.content)}</p>
                    <span className="delete-comment-button" onClick={() => deleteComment(item.id)}><i class="fa fa-trash"></i> پاک کردن پاسخ</span>
                </div>
            </div>
            ))}
        </div>
    );
}

export default Response;