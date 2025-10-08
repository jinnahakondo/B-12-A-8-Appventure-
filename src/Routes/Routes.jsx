import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: 'apps',
                element: <h1>Hello from Apps</h1>
            }
        ]
    }
])