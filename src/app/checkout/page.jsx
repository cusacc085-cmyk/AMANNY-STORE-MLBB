"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Checkout() {
  const searchParams = useSearchParams();

  const packageName =
    searchParams.get("package") || "Not Selected";

  const price =
    searchParams.get("price") || "₹0";

  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [transactionId, setTransactionId] =
    useState("");

  const [paid, setPaid] = useState(false);

  const [screenshot, setScreenshot] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const sendOrder = () => {
    if (!userId || !serverId) {
      alert("Fill User ID & Server ID");
      return;
    }

    if (!transactionId) {
      alert("Enter Transaction ID");
      return;
    }

    if (!screenshot) {
      alert("Upload Payment Screenshot");
      return;
    }

    if (!paid) {
      alert("Confirm Payment First");
      return;
    }

    const orders =
      JSON.parse(
        localStorage.getItem("orders")
      ) || [];

    orders.push({
      userId,
      serverId,
      packageName,
      price,
      transactionId,
      screenshot: preview,
      date: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    const message = `🔥 AMANNY'S STORE 🔥

MLBB Recharge Order

🎮 User ID: ${userId}
🖥️ Server ID: ${serverId}
💎 Package: ${packageName}
💰 Amount: ${price}
🧾 Transaction ID: ${transactionId}

✅ Payment Completed

Please verify my order.`;

    window.open(
      `https://wa.me/917629970920?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/checkout-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-xl bg-black/70 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 text-white">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          Checkout
        </h1>

        <input
          type="number"
          placeholder="MLBB User ID"
          value={userId}
          onChange={(e) =>
            setUserId(e.target.value)
          }
          className="w-full mt-6 p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Server ID"
          value={serverId}
          onChange={(e) =>
            setServerId(e.target.value)
          }
          className="w-full mt-4 p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700">

          <div className="flex justify-between">
            <span>Package</span>
            <span>{packageName}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>Amount</span>
            <span className="text-green-400 font-bold">
              {price}
            </span>
          </div>

        </div>

        <div className="mt-6 bg-gray-900 border border-cyan-500 rounded-2xl p-5">

          <h2 className="text-2xl font-bold text-center text-cyan-400">
            Payment Details
          </h2>

          <p className="mt-4 text-center">
            GPay / Paytm
          </p>

          <p className="text-center text-green-400 text-xl font-bold">
            7629970920
          </p>

          <Image
            src="/payment-qr.png"
            alt="QR"
            width={220}
            height={220}
            className="mx-auto mt-5 rounded-xl"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "7629970920"
              );
              alert("Number Copied");
            }}
            className="w-full mt-4 bg-cyan-500 py-3 rounded-xl font-bold"
          >
            Copy Number
          </button>

        </div>

        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(
              e.target.value
            )
          }
          className="w-full mt-6 p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <div className="mt-4">

          <label>
            Upload Payment Screenshot
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file =
                e.target.files?.[0];

              if (file) {
                setScreenshot(file);

                setPreview(
                  URL.createObjectURL(file)
                );
              }
            }}
            className="w-full mt-2 p-3 rounded-xl bg-gray-900 border border-gray-700"
          />

        </div>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full mt-4 rounded-xl border border-cyan-500"
          />
        )}

        <div className="mt-5 border border-yellow-500 p-4 rounded-xl">

          <label className="flex gap-3 items-center">

            <input
              type="checkbox"
              checked={paid}
              onChange={(e) =>
                setPaid(
                  e.target.checked
                )
              }
            />

            <span>
              I have completed payment
            </span>

          </label>

        </div>

        <button
          onClick={sendOrder}
          disabled={!paid}
          className={`w-full mt-6 py-4 rounded-xl font-bold ${
            paid
              ? "bg-green-500"
              : "bg-gray-600"
          }`}
        >
          Send Order To WhatsApp ✅
        </button>

      </div>
    </main>
  );
}
