
const Anchor = function({href="#", className="", target, content}){
    return(
        <>
            <a href={href} className={className} target={target}>{content}</a>
        </>
    )
}

export default Anchor