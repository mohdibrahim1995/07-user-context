import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const Dashboard = () => {

  const user = useContext(UserContext)
  return (
    <div>
      <h1 className="text-3xl font-semibold"> Hello {user}</h1>
      <h2 className="text-2xl">Your Dashboard  </h2>
      
      
      </div>
  )
}

export default Dashboard