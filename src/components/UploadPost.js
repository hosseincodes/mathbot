import React, { useState } from 'react';
import { Link } from "react-router-dom";
import config from '../utils/config';
import IsAuthenticated from "../utils/IsAuthenticated";

function UploadPost() {

    const [dataToUpload, setDataToUpload] = useState({
        title: '',
        image: '',
        content: '',
    })
    const [imagePreview, setImagePreview] = useState(null)
    const [theTag, settheTag] = useState()
    const [tags, settags] = useState([])
    const [submit, setsubmit] = useState(false)
    const [successupload, setsuccessupload] = useState()
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(false)
    
    // Function to handle form input changes
    const handleChange = (e) => {
        setDataToUpload({
            ...dataToUpload,
            [e.target.name]: e.target.value
        });
    };

    const handleFileSelect = (event) => {
        setDataToUpload({...dataToUpload, image: event.target.files[0]})
        if (event.target.files && event.target.files[0]) {
            setImagePreview(URL.createObjectURL(event.target.files[0]));
        }
    }

    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        setloader(true);
        
        e.preventDefault();

        let form_data = new FormData();
        form_data.append("title", dataToUpload.title);
        form_data.append("content", dataToUpload.content);
        form_data.append("image", dataToUpload.image);
        form_data.append("tags", tags.toString());

        const TokenConfig = config();

        try {
            const response = await TokenConfig.post("/posts/create/", form_data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }});
            setdata(response.data)
            setloader(false)
            setsubmit(true)
            setsuccessupload(true)
        } catch (error) {
            setloader(false)
            console.error("Error creating post:", error.response.data);
            setsubmit(true)
            setsuccessupload(false)
        }
    };

    function eraseText() {
        document.getElementById("output").value = "";
    }

    function removeTag(index){
        settags(tags.filter((el, i) => i !== index))        
    }

    if (IsAuthenticated() === "Not Authenticated") {
        return (
            <>
              <p>جهت ارسال پست ابتدا <Link to="/login">وارد شوید</Link></p>
            </>
        )
    } else {
        if (submit) {
            return (
                <>
                    {successupload ? (
                        <>
                            <div className='success-actions'><p>پست با موفقیت آپلود شد</p></div>
                            <div>
                                <p>پست ارسال شده: </p>
                                <div className="col-md-12 col-xs-12 responsive-box">
                                    <div className="post-box">
                                        <Link className="post-box-link" to={`/posts/${data.id}`}>
                                            <h4>{data.title}</h4>
                                        </Link>
                                        <div className="row post-box-bottom">
                                            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                                                <p className="post-date">{data.created_at}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <div className='faile-actions'><p>پست آپلود نشد! یه مشکلی وجود داره</p></div>}
                    <div className='back-to-ask-box' onClick={() => { setsubmit(false) }}>
                        <p>برگشت به صفحه ثبت پست جدید</p>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <div className="ask-box">
                        <form onSubmit={handleSubmit}>
                            <div className="ask-title">
                                <h4>* عنوان</h4>
                                <input
                                    name="title"
                                    maxlength="90"
                                    onChange={handleChange}
                                    className="ask-input-title"
                                />
                            </div>

                            <div className="ask-image">
                                <h4>تصویر</h4>
                                <input
                                    name="image" type="file" onChange={handleFileSelect}
                                />

                                <div className='askbox-img-upload'>
                                    {imagePreview == null ? (
                                        <p>برای اپلود تصویر روی دکمه بالا کلیک کنید</p>
                                    ) : (
                                        <div className="post-img-box">
                                            <img src={imagePreview} className="post-img" alt="عکس پیش نمایش" />
                                        </div>
                                    )}
                                </div>
                            </div>
        
                            <div className="ask-description">
                                <h4>* توضیحات</h4>
                                <textarea className='ask-description-textarea' name="content" onChange={handleChange}></textarea>
                            </div>
        
                            <div className="ask-tags">
                                <h4>برچسب ها <span style={{fontSize: "12px"}}>(حداکثر ۵ برچسب)</span></h4>
                                <textarea id='output' onChange={(e)=> {settheTag(e.target.value)}} className="ask-input-tags" placeholder="مثلا انتگرال ..." type="text"/>
                                <span onClick={() => {
                                    if (tags.length >= 5) {
                                        alert("بیش از ۵ برچسب نمی توانید وارد کنید")
                                    } else {
                                        settags([...tags, theTag]); eraseText();
                                    }
                                }} className="tags-button">افزودن</span>
                                {tags.map((e, index) => (
                                    <div style={{display: "inline-block"}} key={index} >
                                        <span className='post-tags'>{e} <span onClick={() => {removeTag(index)}}><i style={{cursor: "pointer"}} className="fa-solid fa-xmark"></i></span></span>
                                    </div>
                                ))}
                            </div>

                            <div className="ask-button">
                                <button className="ask-input-button" type="submit">ارسال</button>
                                {loader ? (
                                    <div className='uploading-loader-box'>
                                        <p>در حال اپلود کمی صبر کنید ...</p>
                                    </div>
                                ) : (<></>)}
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default UploadPost;