 
function Card(props) {
return(
    <>
    <div className="card w-80 cursor-pointer ring-inset ring-2 ring-pink-500 ring-inset hover:ring-4 rounded-lg">
        <img src={props.img} alt="product image" className=" min-w-full h-60 p-2"/>
        <span className=" font-bold text-xl text-[#1A0B5B] p-4">{props.name}</span><br></br>
 <span className=" font-semibold text-[#fa4141]">${props.price}</span>
    </div>
    </>
)
}

export default Card;