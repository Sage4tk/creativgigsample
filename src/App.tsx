import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import HowItWorks from './pages/HowItWorks';
import WholeForm from './pages/WholeForm';

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
  }
]);

function App() {


  return <RouterProvider router={router} />
}

export default App;
