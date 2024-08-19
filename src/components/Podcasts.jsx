import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Podcasts = () => {

  const user=useContext(UserContext)
  return (

    <div>
      <h1 className="text-3xl">{user}'s</h1>
      <h2 className="text-xl">  Podcasts</h2></div>
  )
}

export default Podcasts