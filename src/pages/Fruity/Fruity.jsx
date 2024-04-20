import FruityCart from "./FruityCart"
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux"
import { addOne, removeOne } from "../../features/fruitCart"
export default function Fruity() {
    const fruitList = useSelector(state=>state.fruits.list)
    const Dispatch = useDispatch()
  return (
    <>
        <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
        <p className="text-xl text-slate-200 mb-10">
            Pick your fruits and get delivered the next day. 🍒
        </p>
        <ul className="flex gap-4 mb-4">
            {fruitList.map(fruit=>(
                <li  key={fruit.id} className="bg-slate-100 p-4 w-full rounded">
                    <img className="w-full h-[250px] object-cover mb-3" src={fruit.url} alt="fruit"/>
                    <div className="flex justify-between items-baseline mb-4">
                        <h2 className="text-2xl mb-2 font-semibold">{fruit.name}</h2>
                        <p className="text-lg font-semibold">per unit : {fruit.price}$</p>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <button onClick={()=>Dispatch(addOne(fruit))} className="text-slate-100 bg-green-600 hover:bg-green-500 w-full text-lg p-1 rounded ">Add one</button>
                        <button onClick={()=>Dispatch(removeOne(fruit.id))} className="text-slate-100 bg-red-600 hover:bg-red-500 w-full text-lg p-1 rounded">Remove one</button>
                    </div>
                </li>
            ))}
        </ul>
        <FruityCart/>
    </>
  )
}