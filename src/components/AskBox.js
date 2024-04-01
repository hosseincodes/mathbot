import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AskBox() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState()
    const [token, setToken] = useState()
    
    // Function to handle form input changes
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    },[])

    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/posts/create/", {
                title: title,
                content: content
            }, {
                headers: {
                  'Authorization': `Bearer ${token}` 
                }
              });
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
                        onChange={handleChange}
                        className="ask-input-title"
                        placeholder="مثلا کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟"
                    />
                </div>

                <div classNameName="ask-description">
                    <h4>توضیحات</h4>
                    <CKEditor
                        editor={ ClassicEditor }
                        onReady={ ( editor ) => {
                        console.log( "ادیتور آماده استفاده است!", editor );
                        } }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data)
                        } }
                    />
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