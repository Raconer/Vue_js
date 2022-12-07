import Vue from 'vue';

// Viewer, Editor CSS 
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

import { Editor, Viewer } from '@toast-ui/vue-editor';

Vue.component("t-editor", Editor);
Vue.component("t-viewer", Viewer);