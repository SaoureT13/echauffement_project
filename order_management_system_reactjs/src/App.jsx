import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Orders from "./routes/Orders";
import Products from "./routes/Products";
import Customers from "./routes/Customers";
import "./App.css"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/orders",
                    element: <Orders />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/customers",
                    element: <Customers />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
