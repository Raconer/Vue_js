<template>
    <div>
        <toast-viewer :value="value" />
        <toast-editor :value="value" />
    </div>
</template>
<script>
import ToastViewer from '@/components/form/editor/toast/ToastViewer.vue';
import ToastEditor from '@/components/form/editor/toast/ToastEditor.vue';

import { mapState } from "pinia";
import { editorStore } from "@/stores/editor";

export default {
    components: { ToastViewer, ToastEditor },
    name : "ToastModule",
    computed : {
        ...mapState(editorStore, ["value"])
    }
}
</script>