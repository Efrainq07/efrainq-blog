// marked-with-image-size module
import {marked,Lexer} from "../node_modules/marked/marked.min.js";

var imageSizeLink = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

Lexer.rules.inline.normal.link = imageSizeLink;
Lexer.rules.inline.gfm.link = imageSizeLink;
Lexer.rules.inline.breaks.link = imageSizeLink;

var renderer = new marked.Renderer();
renderer.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var size = href.match(/\s+=([\w%]+)?x([\w%]+)?$/);
  if (size) {
    href = href.substring(0, href.length - size[0].length);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  if (size) {
    out += ' width="' + size[1] + '" height="' + size[2] + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

marked.setOptions({renderer: renderer});

export default marked;