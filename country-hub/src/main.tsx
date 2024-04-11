import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { setupStore } from './store/store.ts'
import { router } from './utils/routes.tsx'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

const store = setupStore();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
