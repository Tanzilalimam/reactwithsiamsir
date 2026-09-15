import axios from "axios"
import { useEffect, useState } from "react"
import Img from "../../../ui/Img"
import Para from "../../../ui/para"
import Pbtn from "../../../ui/Pbtn"
import Beef from '../../../assets/img/beeffilet.webp'

const StaffProfile = function(){
let [data, setData] = useState([]);
useEffect(function(){
    async function viewData(){
        let profileApi = await axios.get('https://dummyjson.com/users') ;
        setData(profileApi.data.users);
        console.log(profileApi.data.users);
    }
    viewData();
}, []);

    return(
        <section className="my-20">
            <div className="container">
                <div className="flex flex-wrap justify-start items-start gap-10">
                {
                    data.map(function(item){
                    return(
                    <div key={item.id} className="w-[30%] flex flex-col items-start gap-3 border-2 border-amber-700 rounded-t-xl">
                        <Img src={item.image} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                        <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className="text-xl font-semibold capitalize">{item.firstName}</h4>
                        <Para className='font-medium' text={item.gender}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                        </div>
                    </div>
                    )
                    // return item.users.map(function(user){
                    //     return(
                    // <div key={user.id} className="w-[30%] flex flex-col items-start gap-3 border-2 border-amber-700 rounded-t-xl">
                    //     <Img src={user.image} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                    //     <div className="px-6 flex flex-col items-start gap-3">
                    //     <h4 className="text-xl font-semibold capitalize">{user.firstName + user.lastname}</h4>
                    //     <Para className='font-medium' text={user.address}></Para>
                    //     <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                    //     </div>
                    // </div>
                    //     )
                    // })
                    })
                }
                    {/* <div className="w-[30%] flex flex-col items-start gap-3 border-2 border-amber-700 rounded-t-xl">
                        <Img src={Beef} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                        <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className="text-xl font-semibold capitalize">beef filet (premium)</h4>
                        <Para className='font-medium' text={'some thing about beef filet'}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default StaffProfile