import React, { Component } from "react";

class Editor extends Component {
    render () {
        return (
            <div>
                <div class="wmd-panel">
                    <div id="wmd-button-bar"></div>
                    <label for="answer_question_body" class="required"></label>
                    <textarea class="wmd-input" id="ask_question_body"></textarea>
                </div>

                <div id="wmd-preview" class="wmd-panel wmd-preview"></div>
            </div>
        );
    }
}

export default Editor;