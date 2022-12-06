<template>
  <Editor 
    ref="editor"
    :initialValue = "text"
    :options="options"
     height="500px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
  />
</template>

<script>

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';
import { mapActions } from 'pinia';
import { editorStore } from '@/stores/editor';

export default {
  name : "ToastEditor",
  components:{
    Editor
  },
  props:{
    text : {
      type : String,
      default : ""
    }
  },
  data(){
    return {
      options : {
        minHeight: '200px',
        language: 'en-US',
        useCommandShortcut: true,
        usageStatistics: true,
        hideModeSwitch: false,
        toolbarItems: [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
          ['scrollSync'],
        ]
      }
    }
  },
  methods: {
    ...mapActions(editorStore, ["setState"]),
    changeValue(){
      let value = this.$refs.editor.invoke("getMarkdown");
      this.setState(value);
    }
  },
}
</script>

<style>

</style>