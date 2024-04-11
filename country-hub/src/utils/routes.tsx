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
            path: '/details',
            element: <DetailPage/>,
          },
          {
            path: '/allCountries',
            element: <MainPage/>,
          },
        ],
        errorElement: <ErrorPage/>
      },
]);