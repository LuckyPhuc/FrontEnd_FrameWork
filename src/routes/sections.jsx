import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import WebsiteLayout from "../layout/Website/WebsiteLayout"; // Giả sử bạn cũng có một WebsiteLayout
import Home from "../pages/Home";
import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
//dashboard
import DashboardLayout from "../layout/Dashboard/DashboardLayout";
import CategoryPage from "../pages/Admin/Categories";
import ProductPage from "../pages/Admin/Products/Index";
import Product_grid from "../pages/Admin/Products/Product_grid";
import Dashboard from "../pages/Admin/Dashboard/Index";
import CustomerPage from "../pages/Admin/Users/Index";
import OrderPage from "../pages/Admin/Orders/Index";

import ProductView from "../pages/Website/Products/Index";
import { ToastContainer } from "react-toastify";
import ProductDetail from "../pages/Website/Products/Detail";
export const AppRoute = () => {
  let element = useRoutes([
    // Route cho website
    {
      path: "/",
      element: (
        <WebsiteLayout>
          <Outlet />
          <ToastContainer />
        </WebsiteLayout>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "sign-up", element: <SignUp /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "products", element: <ProductView /> },
        { path: "product/:id", element: <ProductDetail /> },
      ],
    },
    {
      path: "/detail",
      element: <ProductDetail />,
    },
    // Route cho dashboard/admin
    {
      path: "dashboard",
      element: (
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "categories",
          element: <CategoryPage />,
        },
        {
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "customers",
          element: <CustomerPage />,
        },
        {
          path: "orders",
          element: <OrderPage />,
        },
      ],
    },
    // Bạn có thể thêm nhiều route hoặc nhóm route khác tùy theo nhu cầu
  ]);

  return element;
};
