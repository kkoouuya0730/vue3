import {createRouter, createWebHistory} from "vue-router"
import HomeView from '../views/HomeView.vue'
import type {RouteRecordRaw} from "vue-router"

const routeSettings: RouteRecordRaw[] = [
    {
        path: "/",
        name: "AppTop",
        component: HomeView
    },
    {
        path: "/todo/todoList",
        name: "TodoList",
        component: () => {
            return import("../views/todo/TodoList.vue")
        }
    },
    {
        path: "/todo/todoList/001",
        name: "TodoDetail",
        component: () => {
            return import("../views/todo/TodoDetail.vue")
        },
        props: (routes) => {
            const idNum = Number(routes.params.id)
            return {
                id: idNum
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routeSettings
})

export default router