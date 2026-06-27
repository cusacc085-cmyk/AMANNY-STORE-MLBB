"use client";

import { useEffect, useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...orders];

    updated[index].status = status;

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  const deleteOrder = (index) => {
    const updated = orders.filter(
      (_, i) => i !== index
    );

    setOrders(updated);

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
        Manage Orders
      </h1>

      <div className="space-y-5">

        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-cyan-500 rounded-2xl p-5"
          >
            <p>🎮 User ID: {order.userId}</p>
            <p>🖥️ Server ID: {order.serverId}</p>
            <p>💎 Package: {order.packageName}</p>
            <p>💰 Amount: {order.price}</p>
            <p>🧾 Transaction ID: {order.transactionId}</p>

            <p className="mt-3">
              Status:
              <span className="ml-2 text-yellow-400">
                {order.status || "Pending"}
              </span>
            </p>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() =>
                  updateStatus(index, "Approved")
                }
                className="bg-green-500 px-4 py-2 rounded-xl"
              >
                Approve ✅
              </button>

              <button
                onClick={() =>
                  updateStatus(index, "Rejected")
                }
                className="bg-red-500 px-4 py-2 rounded-xl"
              >
                Reject ❌
              </button>

              <button
                onClick={() =>
                  deleteOrder(index)
                }
                className="bg-gray-700 px-4 py-2 rounded-xl"
              >
                Delete 🗑️
              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
