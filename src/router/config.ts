interface RouterOption{
    routes:Array<Routes>
}
interface Routes{
    path:string,
    name:string,
    component:any,
    children?:Array<unknown>,
}

const options:RouterOption = {
    routes:[
        {
            path: "/login",
            name: "login",
            component: ()=>import('../views/login/login.vue'),
            children:[],
        }
    ],

}

export {options}