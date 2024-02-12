import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './UI/Error';
import Home from './UI/Home';
import Menu from './features/menu/Menu';
import CreateOrder, {
  action as CreateOrderAction,
} from './features/order/CreateOrder';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import AppLayout from './UI/AppLayout';
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';
import { loader as updateLoader}  from './features/order/UpdateOrder';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
