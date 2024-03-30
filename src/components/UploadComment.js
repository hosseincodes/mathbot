import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function UploadComment(props) {

    const post = props.postId

    const [content, setContent] = useState() 
    
    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://server.mathbot.ir/api/comments/create/", {
          content: content,
          post: post
        });
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
 
                    <CKEditor
                        editor={ ClassicEditor }
                        onReady={ ( editor ) => {
                        console.log( "ادیتور آماده استفاده است!", editor );
                        } }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data);
                        } }
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