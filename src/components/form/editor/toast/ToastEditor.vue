<template>
  <Editor 
    ref="editor"
    :initialValue="value"
    :options="options"
     height="500px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
    @change="changeValue"
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
    value : {
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
    ...mapActions(editorStore, ["setValue"]),
    changeValue(){
      let markdown = this.$refs.editor.invoke("getMarkdown");
      this.setValue(markdown);
    }
  },
}
</script>

<style>

</style>