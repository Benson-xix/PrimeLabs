import { Link } from "react-router-dom"


const GetStarted = () => {
  return (
    <div className="bg-start w-[157px] rounded-[10px] hover-effect-box h-[48px] pl-7 pt-3 hover:bg-start-dark text-word cursor-pointer" >
        <button className=""><Link to="/contact" className="font-sora">Contact Us</Link></button>
    </div>
  )
}

export default GetStarted