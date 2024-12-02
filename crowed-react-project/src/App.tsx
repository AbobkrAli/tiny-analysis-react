import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import LandingHome from './pages/landing/LandingHome';
// import DashboardLayout from './layouts/DashboardLayout';
import { DashboardLayoutNavigationActions } from './pages/dashboard/DashboardHome';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        {
          path: '/',
          element: <LandingHome />,
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayoutNavigationActions />,
      // children: [
      //   {
      //     path: '/',
      //     element: <DashboardHome />,
      //   },
      // ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
