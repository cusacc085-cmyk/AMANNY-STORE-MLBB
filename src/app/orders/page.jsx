import { cookies } from "next/headers";
import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export default async function Orders() {

  await connectDB();

  const cookieStore =
    await cookies();

  const email =
    cookieStore.get("user")
      ?.value;

  const orders =
    await Order.find({
      userEmail: email,
    }).sort({
      createdAt: -1,
    });

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          My Orders
        </h1>

        <div className="mt-10 space-y-5">

          {orders.map((order) => (

            <div
              key={order._id}
              className="glow-card p-6 rounded-2xl"
            >

              <h3 className="text-xl font-bold">
                {order.packageName}
              </h3>

              <p>
                Amount:
                {" "}
                {order.amount}
              </p>

              <p>
                Payment:
                {" "}
                {order.paymentStatus}
              </p>

              <p>
                Recharge:
                {" "}
                {order.rechargeStatus}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
