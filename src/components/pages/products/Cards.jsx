import axios from 'axios'
import Img from '../../../ui/Img'
import Para from '../../../ui/para'
import Pbtn from '../../../ui/Pbtn'
import Beef from '../../../assets/img/beeffilet.webp'

const Cards = function(){

    return(
        <section className='my-10'>
            <div className="container">
                <div className="flex flex-wrap justify-center items-center gap-5">
                    <div className="w-[25%] flex flex-col items-start gap-3 border-2 border-black rounded-t-xl">
                    <Img src={Beef} alt='no pic' className='w-full object-cover rounded-t-xl'></Img>
                    <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className='text-xl font-semibold capitalize'>beef filet (premium)</h4>
                        <Para className='' text={'kjhjghahgkajhgkaghrghgguh'}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards