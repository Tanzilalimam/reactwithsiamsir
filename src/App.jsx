import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeIndex from "./pages/home/HIndex"
import AboutIndex from "./pages/about/AbtIndex"
import ServiceIndex from "./pages/services/SrvcIndex"
import RootLayout from './components/layouts/RootLayout'

function App() {

  return (
    // <>
    //   <HomeIndex></HomeIndex>
    //   <AboutIndex></AboutIndex>
    //   <ServiceIndex></ServiceIndex>
    // </>
     <BrowserRouter>
      <Routes element= {<RootLayout/>}>
        <Route path="/" element= {<HomeIndex />}></Route>
        <Route path="/about" element= {<AboutIndex />}></Route>
        <Route path="/service" element= {<ServiceIndex />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
