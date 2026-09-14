import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import HomeIndex from "./pages/home/HIndex"
import AboutIndex from "./pages/about/AbtIndex"
import ServiceIndex from "./pages/services/SrvcIndex"
import ProductsIndex from './pages/ProductsIndex'
import RecipeIndex from './pages/RecipeIndex'
import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/common/Error'
import DashboardIndex from './pages/dashboard/DashboardIndex'
import DashRootLayouts from './components/layouts/dashlayouts/DashRootLayout'

// const routerValue = createBrowserRouter(
//     createRoutesFromElements(
//     <>
//     <Route element= {<RootLayout />}>
//       <Route path="/" element={<HomeIndex />}></Route>
//       <Route path="/about" element={<AboutIndex />}></Route>
//       <Route path="/service" element={<ServiceIndex />}></Route>
//     </Route>
//     <Route element={<DashRootLayouts />}>
//       <Route path='/dashboard' element={<DashboardIndex/>}></Route>
//     </Route>
//     <Route path="*" element={<ErrorPage/>}></Route>
//     </>
//   )
// )

const routerValue = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<RootLayout/>}>
      <Route path='/' element={<HomeIndex/>}></Route>
      <Route path='/about' element={<AboutIndex/>}></Route>
      <Route path='/service' element={<ServiceIndex/>}></Route>
      <Route path='/products' element={<ProductsIndex/>}></Route>
      <Route path='/recipes' element={<RecipeIndex/>}></Route>
    </Route>
    <Route element={<DashRootLayouts/>}>
      <Route path='/dashboard' element={<DashboardIndex/>}></Route>
    </Route>
    <Route path='*' element={<ErrorPage/>}></Route>
    </>
  )
)

function App() {

  return (
     <RouterProvider router={routerValue} />
  )
}

export default App
