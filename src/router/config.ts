interface RouterOption{
    routes:Array<Routes>
}
interface Routes{
    path:string,
    name:string,
    component:any,
    children?:Array<unknown>,
}
import indexRoutes from '@/router/routers/indexRoutes'

const options:RouterOption = {
    routes:[
        {
            path: "/login",
            name: "login",
            component: ()=>import('../views/login/login.vue'),
            children:[],
        },
        {...indexRoutes},
    ],
}
console.log(options)
export {options}