import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Likes from "./pages/Likes/Likes";

import Main from "./pages/Main/Main";
import ProductPage from "./pages/Product/ProductPage";
import ShopPage from "./pages/ShopPage/ShopPage";

export const publicRoutes = [
    {
        path: "/shop",
        Component: ShopPage
    },

    {
        path: 'basket', 
        Component: Basket
    },
    {
        path: 'likes',
        Component: Likes
    },
    {
        path: 'main',
        Component: Main
    },
    {
        path: 'contact',
        Component: Contact
    },
    {
        path: '*',
        Component: Main
    },
    {
        path: 'product' + '/:id',
        Component: ProductPage
    },
    {
        path: 'admin',
        Component: AdminPanel
    }


]