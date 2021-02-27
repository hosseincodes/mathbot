import React, { Component } from 'react';
import RichEditor from './RichEditor';

class AskBox extends Component {
    render () {
        return (
            <div className="ask-box">
                    <div className="ask-title">
                        <h4>نام سوال</h4>
                        <textarea className="ask-input-title" placeholder="مثلا کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟"></textarea>
                    </div>

                    <div classNameName="ask-description">
                        <h4>توضیحات</h4>
                        <RichEditor />
                    </div>
                    <div className="ask-tags">
                        <h4>برچسب ها</h4>
                        <textarea className="ask-input-tags" placeholder="مثلا انتگرال ..."></textarea>
                    </div>
                    <div className="ask-button">
                        <input className="ask-input-button" type="button" value="ارسال سوال" />
                    </div>
            </div>
        );
    }
}

export default AskBox;