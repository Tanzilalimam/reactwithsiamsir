import DNav from "./DNav"
import DFooter from "./DFooter"
import { Outlet } from "react-router-dom"

const DashRootLayouts = function(){

    return(
        <>
            <DNav></DNav>
            <Outlet></Outlet>
            <DFooter></DFooter>
        </>
    )
}

export default DashRootLayouts