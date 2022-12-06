
const router = [
    {
        path : "/",
        name: "HelloWorld",
        component : () => import('@/views/HelloWorld.vue')
    },
    {
        path : "/",
        component: () => import('@/views/editor/EditorVue.vue'),
        children : [
            {
                path: '/editor/toast',
                name: 'ToastEditor',
                component: () => import('@/components/form/editor/toast/ToastModule.vue')
            },
        ]
    }
];

export default router;