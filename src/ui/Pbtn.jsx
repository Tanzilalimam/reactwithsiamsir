
const Pbtn = function({className, text}){

    return(
        <>
            <button className={`py-2 px-6.5 rounded-4xl text-[15px] font-semibold leading-7.25 capitalize cursor-pointer transition-all ease-linear duration-300 ${className}`}>{text}</button>
        </>
    )
}

export default Pbtn