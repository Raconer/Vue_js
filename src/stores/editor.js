import { defineStore } from "pinia";

export const editorStore = defineStore("editor",{
    state: () => ({
        value : "test"
    }),
    actions: {
        setValue(param) { 
            this.value = param;
        }
    },
    getters: {
        getValue(state) { 
            return state.value;
        }
    }
});