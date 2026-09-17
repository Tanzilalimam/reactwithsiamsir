import { useState } from "react";
import Pbtn from "../../../ui/Pbtn"

const Form = function(){
let [formData, setFormData] = useState();

let submit = function(e){
    console.log('clicked');
    setFormData(e.target.value);
    console.log(formData.value);
}

let inputInfo = function(e){
    // setFormData(e.target.value);
    console.log(e.target.value);
}

    return(
        <section className="my-10">
            <div className="container">
                <div className="w-[30%] flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                <label className="text-xl font-bold capitalize">text:</label>
                <input type="text" className="py-2 px-6 border-2 border-black rounded-lg text-[16px] font-medium outline-0" placeholder="enter text" onChange={inputInfo} />
                </div>
                <div>display: {formData}</div>
                <Pbtn className='mb-5 w-[80%] bg-blue-300 hover:bg-blue-500 hover:text-white capitalize' text='click' onClick={submit}></Pbtn>
                </div>
            </div>
        </section>
    )
}

export default Form