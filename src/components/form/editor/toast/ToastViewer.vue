<template>
    <viewer
        ref="viewer"
        height="500px"
    />
</template>
<script>

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from "@toast-ui/vue-editor";

export default {
    name : "ToastViewer",
    components : {
        Viewer
    },
    props : {
        text : {
            type : String,
            default : ""
        }
    },
    watch : {
        text : {
            immediate : true,
            handler(param){
                if(this.$refs.viewer){
                    this.$refs.viewer.invoke("setMarkdown", param);
                }
            }
        }
    }
}
</script>