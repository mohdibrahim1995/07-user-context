import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Home = () => {
    const [user,setUser] = useContext(UserContext)
    const changeName=()=>{
        setUser("Ismail Affan")
    }
  return (
    <div className="flex flex-col items-center">
        
        <div className="flex flex-col gap-4">

        <h1 className="text-3xl mt-4 mb-2">{user} Home</h1>
         <button className="text-xs border bg-blue-500 text-white
        py-1 px-2 rounded-lg
        " onClick={()=>setUser("Ismail Mohammed")}>Edit Name </button>

        </div>



        <Link to="/dashboard" className="text-3xl text-indigo-500 hover:opacity-80"> Your Dashboard </Link>
        <Link to="/recommedations" className="text-3xl text-indigo-500 hover:opacity-80"> Your Recommendations </Link>
        <Link to="/podcasts" className="text-3xl text-indigo-500 hover:opacity-80"> Yout Podcasts </Link>
    </div>
  )
}

export default Home