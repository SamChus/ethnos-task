import Users from "@/pages/Users.tsx";
import Todos from "@/pages/Todos.tsx";
import Posts from "@/pages/Posts.tsx";
import Albums from "@/pages/Albums";
import Settings from "@/pages/Settings";
import Layout from "@/layout/Layout.tsx";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Users />},
            {path: "todos", element: <Todos />},
            {path: "posts", element: <Posts />},
            {path: "users", element: <Users />},
            {path: "albums", element: <Albums />},
            {path: "settings", element: <Settings />},
            {path: "*", element: <NotFound />}
        ]
    }, 
])

export default router
    
