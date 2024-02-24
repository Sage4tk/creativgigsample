import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import HowItWorks from './pages/HowItWorks';
import WholeForm from './pages/WholeForm';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/how",
    element: <HowItWorks />
  },
  {
    path: "/form",
    element: <WholeForm />
  },
  {
    path: "/profile",
    element: <Profile />
  },

]);

function App() {


  return <RouterProvider router={router} />
}

export default App;
