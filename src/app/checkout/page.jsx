"use client";

export const dynamic = "force-dynamic";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function CheckoutContent() {
  const searchParams = useSearchParams();

  const product =
    searchParams.get("product") || "";

  const price =
    searchParams.get("price") || "";

  const server =
    searchParams.get("server") || "";

  const [gameId, setGameId] =
    useState("");

  const [serverId, setServerId] =
    useState("");

  const [transactionId, setTransactionId] =
    useState("");

  async function submitOrder() {
    try {

      const res = await fetch(
        "/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            gameId,
            serverId,
            server,
            packageName:
              product,
            amount: price,
            transactionId,
            paymentStatus:
              "pending",
            rechargeStatus:
              "pending",
          }),
        }
      );

      if (res.ok) {
        alert(
          "Order Submitted Successfully"
        );

        window.location.href =
          "/orders";
      } else {
        alert(
          "Failed to submit order"
        );
      }

    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong"
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-4xl mx-auto px-6 py-16">

        <div className="bg-[#08111f] border border-cyan-500/20 rounded-3xl p-8">

          <h1 className="text-4xl font-black text-cyan-400">
            Checkout
          </h1>

          <div className="mt-8 space-y-4">

            <div>
              <p className="text-gray-400">
                Server
              </p>
              <p className="font-bold">
                {server}
              </p>
            </div>

            <div>
              <p className="text-gray-400">
                Package
              </p>
              <p className="font-bold">
                {product}
              </p>
            </div>

            <div>
              <p className="text-gray-400">
                Price
              </p>
              <p className="font-bold text-cyan-400">
                {price}
              </p>
            </div>

          </div>

          <div className="mt-8 space-y-4">

            <input
              type="text"
              placeholder="Enter MLBB ID"
              value={gameId}
              onChange={(e) =>
                setGameId(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/20"
            />

            <input
              type="text"
              placeholder="Enter Server ID"
              value={serverId}
              onChange={(e) =>
                setServerId(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/20"
            />

            <input
              type="text"
              placeholder="Transaction ID"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-black border border-cyan-500/20"
            />

          </div>

          <div className="mt-8 text-center">

            <h2 className="text-2xl font-bold mb-4">
              Payment QR
            </h2>

            <img
              src="/payment-qr.png"
              alt="Payment QR"
              className="w-64 mx-auto rounded-2xl"
            />

          </div>

          <button
            onClick={submitOrder}
            className="w-full mt-8 bg-cyan-500 text-black py-4 rounded-xl font-bold"
          >
            Submit Order
          </button>

        </div>

      </div>

    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#030712] flex items-center justify-center text-white">
          Loading Checkout...
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
