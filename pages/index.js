import { useContext } from "react"
import { CartContext } from "../context/cart-context"
import '../styles/index.css'

export default () => {
  const ctx = useContext(CartContext)
  console.log(ctx)
  return (
  <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
  </div>
)
  }