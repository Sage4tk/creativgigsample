import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './pages/Index';
import HowItWorks from './pages/HowItWorks';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import LastStep from './pages/LastStep';

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
  },
  {
    path: "/page4",
    element: <LastStep />
  }
]);

function App() {


  return <RouterProvider router={router} />
}

export default App;
