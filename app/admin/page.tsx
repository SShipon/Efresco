import { getUsers, getOrders } from "@/actions/adminActions";

export default async function AdminDashboard() {
  const users = await getUsers();
  const orders = await getOrders();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold">Total Users: {users.length}</h2>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold">Total Orders: {orders.length}</h2>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id} className="border p-2 my-2">
              {user.name} - {user.role}
              {user.role !== "admin" && (
                <button className="ml-4 bg-red-500 text-white px-2 py-1 rounded">
                  Ban
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="border p-2 my-2">
              {order.customer} - {order.status}
              <button className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                Mark as Delivered
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
