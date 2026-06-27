import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export default async function AdminPage() {

  await connectDB();

  const orders =
    await Order.find()
      .sort({
        createdAt: -1,
      });

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          Admin Orders
        </h1>

        <div className="overflow-auto mt-10">

          <table className="w-full">

            <thead>

              <tr>

                <th>Email</th>

                <th>Package</th>

                <th>Price</th>

                <th>Payment</th>

                <th>Recharge</th>

              </tr>

            </thead>

            <tbody>

              {orders.map(
                (order) => (

                  <tr
                    key={
                      order._id
                    }
                  >

                    <td>
                      {
                        order.userEmail
                      }
                    </td>

                    <td>
                      {
                        order.packageName
                      }
                    </td>

                    <td>
                      {
                        order.amount
                      }
                    </td>

                    <td>
                      {
                        order.paymentStatus
                      }
                    </td>

                    <td>
                      {
                        order.rechargeStatus
                      }
                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
