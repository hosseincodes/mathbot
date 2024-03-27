import React, { useState } from 'react';
import axios from 'axios';
// import RichEditor from './RichEditor';

function UploadComment(props) {

    const post = props.postId

    const [formData, setFormData] = useState({
        content: "",
        post: post,
      });
    
      // Function to handle form input changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Function to submit the form data using Axios
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://server.mathbot.ir/api/comments/create/", formData);
          console.log("Post created:", response.data);
          alert("پاسخ با موفقیت آپلود شد");
          window.location.reload();
        } catch (error) {
          console.error("Error creating post:", error.response.data);
          alert("پاسخ آپلود نشد! یه مشکلی وجود داره")
        }
      };

    return (
        <div className="your-answer-box">
            <form onSubmit={handleSubmit}>
                <div classNameName="ask-description">
                    <h4>توضیحات</h4>
                    {/* <RichEditor
                        value={data.content}
                        onChange={handleChange}
                    /> */}
                    <textarea
                        className='ask-description-textarea'
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />
                </div>
                <div className="ask-button">
                    <button className="ask-input-button" type="submit">ارسال پاسخ</button>
                </div>
            </form>
        </div>
    );
}

export default UploadComment;