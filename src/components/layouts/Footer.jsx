import Img from "../../ui/Img"
import Para from "../../ui/para"
import Anchor from "../../ui/Anchor";
import Icons from "../../dummy/icons";
import Logo2 from '../../assets/img/logo2.png'
import footerData from "../../dummy/footer/footerData1";

const Footer = function () {

    return (
        <section className="py-25 bg-black1">
            <div className="container">
                <div className="flex items-start gap-16.75">
                    <div className="flex flex-col items-start gap-6.5">
                        <div>
                            <Img src={Logo2} alt='logo2'></Img>
                        </div>
                        <Para className='w-93.5 text-white/75 font-opsan' text='We are a team of passionate cleaning experts who
                        take pride in delivering the highest standard of
                        service. With years of experience in the industry,
                        we’ve perfected our cleaning methods to ensure
                        every job is done right.'></Para>
                        <div className="flex gap-10">
                            {
                                // icons.map(function(item, index){
                                //     return(
                                //     <Anchor key={index} className="text-white/75 text-2xl hover:text-white cursor-pointer" content={item.icon}>
                                //     </Anchor>
                                //     )
                                // })
                                Icons.social.map(function(item, index){
                                    let Icn = item.icon;
                                    return(

                                        <Anchor key={index} className="text-white/75 text-2xl hover:text-cyan-400 cursor-pointer" content={<Icn />}>
                                    </Anchor>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <ul className="flex flex-col items-start gap-2">
                        <h4 className="text-white text-[20px] font-bold capitalize">company</h4>
                        {
                            footerData.footerMenu.map((item, index) => (
                                <li key={index} className="list-none">
                                    <Anchor href={item.href} className="text-white/75 hover:text-blue-500 font-semibold no-underline capitalize" content={item.label}>
                                    </Anchor>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex flex-col items-start gap-2">
                        <h4 className="text-white text-[20px] font-bold capitalize">our services</h4>
                        {
                            footerData.footerService.map((item, index) => (
                                <li key={index} className="list-none">
                                    <Anchor href={item.href} className="text-white/75 hover:text-blue-500 font-semibold no-underline capitalize" content={item.label}>
                                    </Anchor>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex flex-col items-start gap-2.5">
                    {
                    footerData.footerContact.map(function(item, index){
                    let Cont = item.icon;
                    return(
                    <div key={index} className=" flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2.5">
                    <Cont className="text-[#fee74a] text-[16px]"/>
                    <h4 className="text-white text-[16px] font-bold capitalize">{item.label}</h4>
                    </div>
                    <Para className='text-white/75' text={item.desc}></Para>
                    </div>
                    ) 
                    })
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer