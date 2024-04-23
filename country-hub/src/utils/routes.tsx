import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
          {
            path: '/details/:cca3',
            element: <DetailPage/>,
            errorElement: <ErrorPage/>
          },
          {
            path: '/allCountries',
            element: <MainPage/>,
            errorElement: <ErrorPage/>
          },
        ],
        errorElement: <ErrorPage/>
      },
]);