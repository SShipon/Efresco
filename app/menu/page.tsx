import { fetchMenuItems } from "../actions/menuActions";

export default async function MenuPage() {
  const menu = await fetchMenuItems(); // API থেকে ডাটা আনবে

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item._id} className="border p-2 my-2">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
