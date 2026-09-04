import { NavLink } from "react-router-dom"

const ErrorPage = function(){

    return(
        <>
            <div className="h-screen flex justify-center items-center flex-col gap-5">
                <div className="flex justify-center items-center gap-5">
                <h1 className="text-5xl font-bold uppercase">404</h1>
                <span className="w-1 h-10 bg-gray-600"></span>
                <p className='text-3xl font-semibold capitalize'>page does not exist.</p>
                </div>
                <NavLink to='/' className='text-violet-800 text-2xl font-semibold capitalize hover:underline'>back to home</NavLink>
            </div>
        </>
    )
}

export default ErrorPage
