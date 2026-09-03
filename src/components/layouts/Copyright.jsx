import Para from "../../ui/para"
import Anchor from "../../ui/Anchor"

const Copyright = function(){
let date = new Date();
let crrYear = (date.getFullYear());
console.log(crrYear);
    return(
        <section className="w-full py-5 bg-black1 border-t-2 border-t-white/10">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Para className='text-white capitalize' text={`&copy; copyright ${crrYear}- uclean by designasia`}></Para>
                <div className="flex gap-5">
                    <Anchor href="/terms&conditions" target='_blank' className="text-white/40 hover:text-white text-[16px] capitalize" content='terms & conditions'></Anchor>
                    <Anchor href="/privacypolicy" target='_blank' className="text-white/40 hover:text-white capitalize" content='privacy policy'></Anchor>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Copyright