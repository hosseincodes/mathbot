import React, { useState } from 'react';
import config from '../utils/config';
import IsAuthenticated from "../utils/IsAuthenticated";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function UploadComment(props) {

    const post = props.postId

    const [content, setContent] = useState() 
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      const TokenConfig = config();

      try {
        const response = await TokenConfig.post("/comments/create/", {
          content: content,
          post_id: post
        });
        console.log("Post created:", response.data);
        alert("دیدگاه شما با موفقیت ارسال شد");
        window.location.reload();
      } catch (error) {
        console.error("Error creating post:", error.response.data);
        alert("ارسال نشد! یه مشکلی وجود داره")
      }
    };

    if (IsAuthenticated() === "Not Authenticated") {
      return (
        <>
          <p>جهت ارسال دیدگاه ابتدا <Link to="/login">وارد شوید</Link></p>
        </>
      )
    } else {
      return (
        <div className="your-answer-box">
            <form onSubmit={handleSubmit}>
                <div className="ask-description">
                  <CKEditor
                        editor={ ClassicEditor }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data);
                        } }
                  />

                </div>
                <div className="ask-button">
                    <button className="ask-input-button" type="submit">ارسال</button>
                </div>
            </form>
        </div>
      );
    }
}

export default UploadComment;