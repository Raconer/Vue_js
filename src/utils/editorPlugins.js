import Prism from 'prismjs';
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";

import 'prismjs/components/prism-clojure.js';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

export default [[codeSyntaxHighlight, { highlighter: Prism}]];