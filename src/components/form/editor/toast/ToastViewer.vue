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
        value : {
            type : String,
            default : ""
        }
    },
    watch : {
        value : {
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