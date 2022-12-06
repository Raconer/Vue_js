<template>
    <div>
        <toast-editor :markDown="text" />
    </div>
</template>
<script>
// import ToastViewer from '@/components/form/editor/toast/ToastViewer.vue';
import ToastEditor from '@/components/form/editor/toast/ToastEditor.vue';

import { mapState } from "pinia";
import { editorStore } from "@/stores/editor";

export default {
    components: { ToastEditor },
    name : "ToastModule",
    computed : {
        ...mapState(editorStore, ["text"])
    }
}
</script>