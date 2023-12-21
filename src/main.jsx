import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Authentication/AuthProvider.jsx';
import Dashboard from './Components/Task Management Dashboard/Dashboard.jsx';
import CreateTask from './Components/Task Management Dashboard/CreateTask/CreateTask.jsx';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import UpdateTask from './Components/Task Management Dashboard/UpdateTask.jsx';
import PrivateRoute from './Components/Authentication/PrivateRoute.jsx';
import AboutUs from './Components/About Us/AboutUs.jsx';
import Homepage from './Components/Homepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  },
  {
    path: "/createTask",
    element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>,
  },
  {
    path: "/updateTask/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/getTaskbyId/${params.id}`),
    element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DndProvider>
  </React.StrictMode>
);
