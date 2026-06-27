"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
      alert("Verify Payment First");
      return;
    }

    const message = `🔥 AMANNY'S STORE 🔥

MLBB Recharge Order

🎮 User ID: ${userId}

🖥️ Server ID: ${serverId}

💎 Package: ${packageName}

💰 Amount: ${price}

🧾 Transaction ID: ${transactionId}

Payment Completed ✅

Please check my order.

(Payment Screenshot Sent Separately)`;

    window.open(
      `https://wa.me/917629970920?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/checkout-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-xl bg-black/60 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 text-white">

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

          <div className="flex justify-between mt-3">
            <span>Amount</span>
            <span className="text-green-400 font-bold">
              {price}
            </span>
          </div>

        </div>

        <div className="mt-6 bg-gradient-to-br from-cyan-950 to-gray-900 p-6 rounded-2xl border border-cyan-500">

          <h3 className="text-2xl font-bold text-cyan-400 text-center">
            💳 Payment Details
          </h3>

          <div className="mt-4 bg-black/40 p-4 rounded-xl">

            <p className="text-gray-400">
              Google Pay
            </p>

            <p className="text-green-400 font-bold text-xl">
              7629970920
            </p>

          </div>

          <div className="mt-4 bg-black/40 p-4 rounded-xl">

            <p className="text-gray-400">
              Paytm
            </p>

            <p className="text-green-400 font-bold text-xl">
              7629970920
            </p>

          </div>

          <img
            src="/payment-qr.png"
            alt="Payment QR"
            className="w-56 mx-auto mt-6 rounded-2xl border border-cyan-500"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "7629970920"
              );
              alert("Number Copied");
            }}
            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold"
          >
            Copy Payment Number
          </button>

        </div>

        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(e.target.value)
          }
          className="w-full mt-6 p-3 rounded-xl bg-gray-900 border border-gray-700"
        />

        <div className="mt-4">

          <label className="block mb-2">
            Upload Payment Screenshot
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setScreenshot(
                e.target.files[0]
              )
            }
            className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700"
          />

        </div>

        <div className="mt-5 bg-yellow-500/10 border border-yellow-500 rounded-xl p-4">

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={paid}
              onChange={(e) =>
                setPaid(
                  e.target.checked
                )
              }
              className="w-5 h-5"
            />

            <span>
              I have completed the payment
            </span>

          </label>

        </div>

        <button
          onClick={sendOrder}
          disabled={!paid}
          className={`w-full mt-6 py-4 rounded-xl font-bold text-lg ${
            paid
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Send Order To WhatsApp ✅
        </button>

      </div>
    </main>
  );
}
