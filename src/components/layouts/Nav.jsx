import Img from "../../ui/Img"
import Anchor from "../../ui/Anchor"
import Logo from '../../assets/img/logo.png'
import menuData from "../../dummy/menuData"
import Pbtn from "../../ui/Pbtn"

const Nav = function () {
    
    return (
        <nav className="py-7.5 bg-white">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div>
                        <Img src={Logo} alt='logo'></Img>
                    </div>
                    <div>
                        <ul className="flex gap-6.5">
                            {
                            menuData.map((item, index) => (
                            <li key={index} className="list-none">
                                <Anchor href={item.href} className="text-red-500 hover:text-blue-500 font-semibold no-underline uppercase transition-all ease-linear duration-300" content={item.label}>
                                </Anchor>
                            </li>
                        ))
                      }
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Anchor href="#" className="text-blue-500 text-[12px] font-bold no-underline lowercase" content="need help ?"></Anchor>
                        <Anchor href="#" className="text-blue-500 font-bold no-underline lowercase" content="+1 5000 6000"></Anchor>
                    </div>
                    <Pbtn className="bg-[#4881fb6e] hover:bg-[#4881fb] hover:text-white" text="book service now"></Pbtn>
                </div>
            </div>
        </nav>
    )
}

export default Nav