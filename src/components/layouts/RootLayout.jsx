import Nav from "./Nav"
import Footer from "./Footer"
import Copyright from "./Copyright"
import { Outlet } from "react-router-dom"

const RootLayout = function(){

    return(
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    )
}

export default RootLayout