import axios from 'axios'
import { useEffect, useState } from 'react'
import Img from '../../../ui/Img'
import Para from '../../../ui/para'
import Pbtn from '../../../ui/Pbtn'

const Cards = function(){
let [data, setData] = useState([]);

useEffect(function(){
    async function viewData(){
    let productApi = await axios.get('https://dummyjson.com/carts');
    setData(productApi.data.carts);
    console.log(productApi.data.carts);
    }
    viewData();
}, []);

    return(
        <section className='my-10'>
            <div className="container">
                <div className="flex flex-wrap justify-center items-center gap-5">
                {
                    data.map(function(item){
                        return item.products.map(function(product){
                            return(
                        <div key={product.id} className="w-[30%] flex flex-col items-start gap-3 border-2 border-black rounded-t-xl">
                        <Img src={product.thumbnail} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                        <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className='text-xl font-semibold capitalize'>{product.title}</h4>
                        <Para className='' text={product.price}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                        </div>
                        </div>
                        )
                        })
                    })
                }
                    {/* <div className="w-[25%] flex flex-col items-start gap-3 border-2 border-black rounded-t-xl">
                    <Img src={Beef} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                    <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className='text-xl font-semibold capitalize'>beef filet (premium)</h4>
                        <Para className='' text={'kjhjghahgkajhgkaghrghgguh'}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                    </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Cards