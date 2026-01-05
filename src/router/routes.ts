import {createBrowserRouter, type RouteObject} from "react-router";
import {Landing} from "@/pages/landing";
import {SignIn} from "@/pages/auth/signin.tsx";
import {SignUp} from "@/pages/auth/signup.tsx";

export const routes: RouteObject[] = [
    {
        id: "initial",
        path: "/",
        children: [
            {
                id: 'landing',
                index: true,
                Component: Landing
            },
        ]
    },
    {
        id: "app",
        path: "/app",
        children: []
    },
    {
        id: "auth",
        path: "/auth",
        children: [
            {
                id: 'signIn',
                index: true,
                Component: SignIn
            },
            {
                id: 'signUp',
                path: 'signup',
                Component: SignUp
            },
        ]
    }
]

export const generatedRoutes = createBrowserRouter(routes);