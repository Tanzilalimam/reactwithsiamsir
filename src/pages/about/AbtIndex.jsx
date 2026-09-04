import Nav from "../../components/layouts/Nav"
import Footer from "../../components/layouts/Footer"
import Copyright from "../../components/layouts/Copyright"

const AboutIndex = function(){

    return(
        <>
        <Nav></Nav>
        <div className="py-5 text-4xl text-center">this is about page</div>
        <Footer></Footer>
        <Copyright></Copyright>
        </>
    )
}

export default AboutIndex