import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import HowItWorks from './pages/HowItWorks';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/page1",
    element: <HowItWorks />
  },
  {
    path: "/page2",
    element: <FirstStep />
  },
  {
    path: "/page3",
    element: <SecondStep /> 
  }
]);

function App() {


  return <RouterProvider router={router} />
}

export default App;
