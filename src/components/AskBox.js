import React, { useState } from 'react';
import axios from 'axios';
// import RichEditor from './RichEditor';

function AskBox() {

    const [formData, setFormData] = useState({
        title: "",
        content: "",
      });
    
      // Function to handle form input changes
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Function to submit the form data using Axios
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://server.mathbot.ir/api/posts/create/", formData);
          console.log("Post created:", response.data);
          alert("پست با موفقیت آپلود شد");
        } catch (error) {
          console.error("Error creating post:", error.response.data);
          alert("پست آپلود نشد! یه مشکلی وجود داره")
        }
      };

    return (
        <div className="ask-box">
            <form onSubmit={handleSubmit}>
                <div className="ask-title">
                    <h4>نام سوال</h4>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="ask-input-title"
                        placeholder="مثلا کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟"
                    />
                </div>

                <div classNameName="ask-description">
                    <h4>توضیحات</h4>
                    {/* <RichEditor
                        value={data.content}
                        onChange={handleChange}
                    /> */}
                    <textarea className='ask-description-textarea' name="content" value={formData.content} onChange={handleChange}></textarea>
                </div>
                {/* <div className="ask-tags">
                    <h4>برچسب ها</h4>
                    <textarea className="ask-input-tags" placeholder="مثلا انتگرال ..."></textarea>
                </div> */}
                <div className="ask-button">
                    <button className="ask-input-button" type="submit">ارسال سوال</button>
                </div>
            </form>
        </div>
    );
}

export default AskBox;