"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const searchParams = useSearchParams();

  const packageName =
    searchParams.get("package") || "Not Selected";

  const price =
    searchParams.get("price") || "₹0";

  const [userId, setUserId] =
    useState("");

  const [serverId, setServerId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const sendOrder = () => {
    if (!userId || !serverId) {
      alert("Please fill User ID & Server ID");
      return;
    }

    setLoading(true);

    const message = `🔥 AMANNY'S STORE 🔥

MLBB Recharge Order

🎮 User ID: ${userId}

🖥️ Server ID: ${serverId}

💎 Package: ${packageName}

💰 Amount: ${price}

Payment Completed ✅

Please check my order.`;

    window.open(
      `https://wa.me/917629970920?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setLoading(false);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/checkout-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-lg bg-black/60 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 text-white">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          Checkout
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Complete Your Recharge
        </p>

        <input
          type="number"
          placeholder="MLBB User ID"
          value={userId}
          onChange={(e) =>
            setUserId(e.target.value)
          }
          className="w-full mt-6 p-3 rounded-xl bg-gray-900 border border-gray-700 outline-none"
        />

        <input
          type="number"
          placeholder="Server ID"
          value={serverId}
          onChange={(e) =>
            setServerId(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700 outline-none"
        />

        <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700">

          <div className="flex justify-between">
            <span>Package</span>
            <span>{packageName}</span>
          </div>

          <div className="flex justify-between mt-3">
            <span>Amount</span>
            <span className="text-green-400 font-bold">
              {price}
            </span>
          </div>

        </div>

        <div className="mt-6 bg-cyan-950 border border-cyan-500 p-4 rounded-xl">

          <h3 className="font-bold text-cyan-400">
            Payment Number
          </h3>

          <p className="text-2xl font-bold mt-2">
            7629970920
          </p>

          <p className="text-sm text-gray-300 mt-2">
            Complete payment before placing order.
          </p>

        </div>

        <button
          onClick={sendOrder}
          disabled={loading}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
        >
          {loading
            ? "Processing..."
            : "Order on WhatsApp"}
        </button>

      </div>
    </main>
  );
}
