import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import EachMovieTrailer from "./EachMovieTrailer";


function Body() {

 
    

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
        {
            path:"/browse/:movieTrailer",
            element:<EachMovieTrailer />,
        }
    ])

    

    return ( 
        <div>
            <RouterProvider router={appRouter} />
        </div>
     );
}

export default Body;