import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import HowItWorks from './pages/HowItWorks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/page1",
    element: <HowItWorks />
  }
]);

function App() {


  return <RouterProvider router={router} />
}

export default App;
