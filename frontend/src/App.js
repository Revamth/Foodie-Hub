import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Headercard from "./components/Headercard";
import LoginPage from "./components/LoginPage";
import Error from "./components/Error";
import SignupPage from "./components/SignupPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Body = lazy(() => import("./components/Body"));
const Restromenu = lazy(() => import("./components/Restromenu"));
const Cart = lazy(() => import("./components/Cart"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Headercard />
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                Loading...
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resid",
        element: <Restromenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
