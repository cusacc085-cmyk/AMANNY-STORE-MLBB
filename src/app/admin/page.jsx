"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
        Admin Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center">
          No Orders Found
        </p>
      ) : (
        <div className="grid gap-5">

          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500 rounded-2xl p-5"
            >
              <h2 className="text-xl font-bold">
                Order #{index + 1}
              </h2>

              <p className="mt-2">
                🎮 User ID:
                {order.userId}
              </p>

              <p>
                🖥️ Server ID:
                {order.serverId}
              </p>

              <p>
                💎 Package:
                {order.packageName}
              </p>

              <p>
                💰 Amount:
                {order.price}
              </p>

              <p>
                🧾 Transaction ID:
                {order.transactionId}
              </p>

              <p className="text-green-400 mt-2">
                Payment Completed ✅
              </p>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}
