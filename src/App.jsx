import Navbar from './Components/Navbar';
import About from './Components/About'; 
import Home from './Components/Home'
import AllCourses from './Components/AllCourses'
import Blog from './Components/Blog'
import Testimonials from './Components/Testimonials'
import Events from './Components/Events'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/> 
    },
    {
      path: '/home',
      element: <><Navbar/> <Home/> </>
    } ,
    {
      path: '/AllCourses',
      element: <><Navbar/> <AllCourses/> </>
    } ,
    {
      path: '/About',
      element: <><Navbar/> <About/> </>
    } 
    ,
    {
      path: '/Blog',
      element: <><Navbar/> <Blog/> </>
    } 
    ,
    {
      path: '/Events',
      element: <><Navbar/> <Events/> </>
    } 
    ,
    {
      path: '/Testimonials',
      element: <><Navbar/> <Testimonials/> </>
    } 
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}> {/* Added RouterProvider */}
        <About /> 
        <Home/>
        <Navbar />
        <AllCourses/>
        <Testimonials/>
        <Events/>
      </RouterProvider>
    </div>
  )
}

export default App;
