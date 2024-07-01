import React from "react";
import { Marked, Renderer } from "marked";
import { markedHighlight } from "marked-highlight";
import Prism from 'prismjs';

const marked = new Marked(
    markedHighlight({
      highlight(code, lang, info) {
        if(lang){
            const language = Prism.languages[lang]
            return Prism.highlight(code, language, info)
        } else {
            return Prism.util.encode(code).toString();
        }
      }
    })
  );

function sanitize(str : string) {
    return str.replace(/&<"/g, function (m) {
        if (m === "&") return "&amp;"
        if (m === "<") return "&lt;"
        return "&quot;"
    })
}


const renderer = {
}


marked.use({renderer})

const Markdown = ({ content, ...props} : { content : string}) => {

    // creates the markup
    const convertMarkdown = function(children : string) {
        return { __html: marked.parse(children)};
    }

    // sets the markup inside an element
    return <div dangerouslySetInnerHTML={convertMarkdown(content)}/>
};

export default Markdown;