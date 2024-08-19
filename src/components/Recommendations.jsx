import { useContext } from "react"
import { UserContext } from "../context/UserContext"
const Recommendations = () => {

  const user=useContext(UserContext)
  return (
    <div>
      <h1 className="text-3xl">{user}'s</h1>
      <h2 className="text-xl">Recommendations</h2></div>
  )
}

export default Recommendations
