import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Orders from "./pages/Orders"
import Product from "./pages/Product"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE,SHOP_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDERS_ROUTE,
        Component:Orders
    }
]

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component:Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component:Product
    }
]

