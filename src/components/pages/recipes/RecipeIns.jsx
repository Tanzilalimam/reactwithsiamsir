import axios from "axios"
import { useEffect, useState } from "react"
import Img from "../../../ui/Img"
import Para from "../../../ui/para"
import Pbtn from "../../../ui/Pbtn"
import Beef from '../../../assets/img/beeffilet.webp'

const RecipeIns = function(){
let [data, setData] = useState([]);

useEffect(function(){
    async function viewData(){
        let recipeApi = await axios.get('https://dummyjson.com/recipes');
        setData(recipeApi.data.recipes);
        console.log(recipeApi.data.recipes);
    }
    viewData();
}, [])
    return(
        <section className="my-10">
            <div className="container">
                <div className="flex flex-wrap justify-center items-center gap-6">
                {
                    data.map(function(recipe){
                        return(
                    <div key={recipe.id} className="w-[25%] h-150 overflow-y-auto scrollbar-none flex flex-col items-start gap-3 border-2 border-black rounded-t-xl">
                    <Img src={recipe.image} alt='no pic' className='w-ful object-cover rounded-t-xl'></Img>
                    <div className="px-6 flex flex-col items-start gap-3">
                        <h4 className='text-xl font-semibold capitalize'>{recipe.name}</h4>
                        <ul className="px-6 flex flex-col gap-2">
                            {
                            recipe.ingredients.map(function(i){
                                return(
                                <li key={i.id} className="list-disc">{i}</li>
                                )
                            })
                            }
                        </ul>
                        <Para className='font-medium' text={recipe.instructions}></Para>
                        <Pbtn className='mb-5 bg-blue-500 text-white/75 hover:text-white capitalize' text='learn more'></Pbtn>
                    </div>
                    </div>    
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default RecipeIns