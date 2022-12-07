<template>
   <div>
     <t-viewer
        ref="viewer"
        height="500px"
        :options="options"
    />
   </div>
</template>
<script>
import plugins from "@/utils/editorPlugins";

export default {
    name : "ToastViewer",
    props : {
        value : {
            type : String,
            default : ""
        }
    },
    data(){
        return{
            options : {
                plugins: plugins
            }
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
<style scoped>
  @import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
  @import 'prismjs/themes/prism.min.css';
</style>