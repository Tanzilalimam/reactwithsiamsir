import Nav from "../../components/layouts/Nav"
import Footer from "../../components/layouts/Footer"
import Copyright from "../../components/layouts/Copyright"


const ServiceIndex = function () {

    return (
        <>
            <Nav></Nav>
            <div className="py-5 text-4xl text-center">this is service page</div>
            <Footer></Footer>
            <Copyright></Copyright>
        </>
    )
}

export default ServiceIndex