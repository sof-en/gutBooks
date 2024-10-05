import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../layout";
export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
        ]
    }
])