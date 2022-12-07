<template>
  <t-editor 
    ref="editor"
    :initialValue="value"
    :options="options"
     height="1000px"
    previewStyle="vertical"
    @change="changeValue"
  />
</template>

<script>
import { mapActions } from 'pinia';
import { editorStore } from '@/stores/editor';
import plugins from "@/utils/editorPlugins";
export default {
  name : "ToastEditor",
  props:{
    value : {
      type : String,
      default : ""
    }
  },
  data(){
    return {
      options : {
        minHeight: '500px',
        language: 'en-US',
        useCommandShortcut: true,
        usageStatistics: true,
        hideModeSwitch: true,
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
          ['scrollSync'],
        ],
        plugins: plugins
      }
    }
  },
  methods: {
    ...mapActions(editorStore, ["setValue"]),
    changeValue(){
      let markdown = this.$refs.editor.invoke("getMarkdown");
      this.setValue(markdown);
    }
  },
}
</script>
<style scoped>
  @import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
  @import 'prismjs/themes/prism.min.css';
</style>