
import marked from 'react-markdown';
// import Prism from "prismjs";
import React from 'react';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
};
marked.setOptions({
    breaks: true,
    // highlight: function (code) {
    //     return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    // }
});


const Preview = (props) => {

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(props.markdown, { renderer: renderer })
            }}
            id="preview"
        />
    );
};

export default Preview;