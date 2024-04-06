import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AskBox() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState()
    const [token, setToken] = useState()
    const [submit, setsubmit] = useState(false)
    const [successupload, setsuccessupload] = useState()
    const [data, setdata] = useState([])
    
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
            const response = await axios.post("https://server.mathbot.ir/api/posts/create/", {
                title: title,
                content: content
            }, {
                headers: {
                  'Authorization': `Bearer ${token}` 
                }
              });
            setdata(response.data)
            setsubmit(true)
            setsuccessupload(true)
        } catch (error) {
            console.error("Error creating post:", error.response.data);
            setsubmit(true)
            setsuccessupload(false)
        }
    };

    if (submit) {
        return (
            <>
                {successupload ? (
                    <>
                        <div className='success-actions'><p>پست با موفقیت آپلود شد</p></div>
                        <div>
                            <p>سوال آپلود شده: </p>
                            <div className="col-md-12 col-xs-12 responsive-box">
                                <div className="question-box">
                                    <Link className="question-box-link" to={`/questions/${data.id}`}>
                                        <h4>{data.title}</h4>
                                    </Link>
                                    <div className="row question-box-bottom">
                                        <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                                            <p className="question-date">{data.created_at}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <div className='faile-actions'><p>پست آپلود نشد! یه مشکلی وجود داره</p></div>}
                <div className='back-to-ask-box' onClick={() => { setsubmit(false) }}>
                    <p>برگشت به صفحه ثبت سوال جدید</p>
                </div>
            </>
        )
    } else {
        return (
            <div>
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
            </div>
        );
    }
}

export default AskBox;