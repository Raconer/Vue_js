
const router = [
    {
        path : "",
        component: () => import('@/components/layout/CenterLayout'),
        children: [
            {
                path: "/",
                name: "HelloWorld",
                components: {
                    default : () => import('@/components/HelloWorld.vue')
                }
            },
            {
                path: 'editor',
                redirect : "/editor/toast",
                components: {
                    header : () => import('@/components/header/DefHeader.vue'),
                    default: () => import('@/views/editor/EditorView.vue'),
                    footer : () => import('@/components/common/footer/DefFooter.vue')
                },
                children: [
                    {
                        path : "toast",
                        name: "ToastEditorView",
                        components : {
                         
                            default : () => import('@/components/form/editor/toast/ToastModule.vue')
                        }
                    }
                ]
            },
        ]
    },
];

export default router;