import React from "react";
import NavBar from './Menu';
import Accordion from './Accordion';
import Calculator from './Calculator';
import Countdown from './Countdown';
import DisplayExtData  from './DisplayExtData';
import Default from './Default';

// Thanks: https://codesandbox.io/p/sandbox/react-router-n46sqp?file=%2Fsrc%2FApp.js%3A35%2C1-36%2C1
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const HeaderLayout = () => (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
  
const guide = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        { path: "/", element: <Default /> },
        { path:"/toggle", element:<Accordion /> },
        { path:"/counter", element:<Countdown from={10} /> },
        { path:"/data-fetch", element:<DisplayExtData /> },
        { path:"/calculator", element:<Calculator operand1={7} operand2={4} /> },
        ]
    }
  ]);
  
  
const App = () => {
    return (
        <>
            <RouterProvider router={guide} />       
        </>
    )
}

export default App
