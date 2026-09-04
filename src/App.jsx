import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import HomeIndex from "./pages/home/HIndex"
import AboutIndex from "./pages/about/AbtIndex"
import ServiceIndex from "./pages/services/SrvcIndex"
import RootLayout from './components/layouts/RootLayout'

// const routes = createRoutesFromElements(
//   <>
//   <Route element= {<RootLayout />}>
//     <Route path="/" element={<HomeIndex />}></Route>
//     <Route path="/about" element={<AboutIndex />}></Route>
//     <Route path="/service" element={<ServiceIndex />}></Route>
//   </Route>
//   </>
// );

const routerValue = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route element= {<RootLayout />}>
      <Route path="/" element={<HomeIndex />}></Route>
      <Route path="/about" element={<AboutIndex />}></Route>
      <Route path="/service" element={<ServiceIndex />}></Route>
    </Route>
    </>
  )
)

function App() {

  return (
     <RouterProvider router={routerValue} />
  )
}

export default App
