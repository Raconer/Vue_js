import { defineStore } from "pinia";

export const editorStore = defineStore("editor",{
    state: () => ({
        text : ""
    }),
    actions: {
        setState(param) { 
            this.text = param;
        }
    },
    getters: {
        getState(state) { 
            return state.text;
        }
    }
});