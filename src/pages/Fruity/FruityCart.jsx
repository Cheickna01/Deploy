import { useSelector } from "react-redux";
export default function FruityCart() {
  const fruit = useSelector((state) => state.fruitCart.cart);
  console.log(fruit);
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-2xl p-5 border-b border-slate-400">Your FruityCart</p>
      <ul>
        {fruit.map((f) => (
          <li key={f.id} className="px-5 py-2 text-xl">
            <span className="font-semibold mr-2">{f.quantity}</span>
            <span>{f.name}</span>
          </li>
        ))}
        {fruit.length === 0 && (
          <li className="px-5 py-2 text-xl font-semibold">
            ... Grab one fruit!
          </li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400">
        Total price :{" "}
        <span className="font-semibold">
          {fruit.reduce((acc, item) => item.price * item.quantity + acc, 0)}$
        </span>
      </p>
    </div>
  );
}
