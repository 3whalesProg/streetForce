import AdminPanel from "./pages/Components/AdminPanel/AdminPanel";
import Basket from "./pages/Components/Basket/Basket";
import Contact from "./pages/Components/Contact/Contact";
import Likes from "./pages/Components/Likes/Likes";
import Main from "./pages/Components/Main/Main";
import ProductPage from "./pages/Components/Product/ProductPage";
import ShopPage from "./pages/Components/ShopPage/ShopPage";

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