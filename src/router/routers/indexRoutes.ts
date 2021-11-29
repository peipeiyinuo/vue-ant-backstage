
interface Routes{
    path:string,
    name:string,
    component:any,
    children?:Array<unknown>,
    redirect?:string,
}

const indexRoutes:Routes = {
    path: "/index",
    name: "index",
    component: ()=>import('../../views/index/index.vue'),
    children:[
        {
            path: "baseIndex",
            name: "baseIndex",
            component: ()=>import('../../views/index/baseIndex.vue'),
        }
    ],
    redirect:'/index/baseIndex'
};


export default indexRoutes