import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import ApliedJobs from './Component/ApliedJobs/ApliedJobs';
import Blog from './Component/Blog/Blog';
import JobDetails from './Component/JobDetails/JobDetails';
import Statistics from './Component/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('CategoryData.json')
      },
      {
        path: 'jobDetails/:jobId',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/appliedjobs',
        element: <ApliedJobs></ApliedJobs>,

      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/blog ',
        element: <Blog></Blog>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '*',
        element: <div className='text-center m-5  text-bg-warning p-5 rounded-3'>
          <h1 className='p-5 '>404 Not Found</h1>
        </div>
      },


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)