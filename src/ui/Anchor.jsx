
const Anchor = function({href="#", className="", target, content}){
    return(
        <>
            <a href={href} className={`${className} transition-all ease-linear duration-300`} target={target}>{content}</a>
        </>
    )
}

export default Anchor