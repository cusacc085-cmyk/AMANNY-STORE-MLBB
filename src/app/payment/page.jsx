"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const router = useRouter();

  const [transactionId, setTransactionId] = useState("");

  const verifyPayment = () => {
    if (!transactionId.trim()) {
      alert("Enter Transaction ID");
      return;
    }

    localStorage.setItem(
      "transactionId",
      transactionId
    );

    alert("Payment Verified Successfully ✅");

    router.push("/checkout");
  };

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/payment-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 w-full max-w-md text-white">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Payment Verification
        </h1>

        <p className="mt-4 text-center text-gray-300">
          GPay / Paytm
        </p>

        <p className="text-center text-2xl text-green-400 font-bold mt-2">
          7629970920
        </p>

        <img
          src="/payment-qr.png"
          alt="QR Code"
          className="w-52 mx-auto mt-5 rounded-xl border border-cyan-500"
        />

        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "7629970920"
            );
            alert("Number Copied ✅");
          }}
          className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold"
        >
          Copy Number
        </button>

        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(e.target.value)
          }
          className="w-full mt-5 p-3 rounded-xl bg-gray-800 border border-gray-700 outline-none focus:border-cyan-500"
        />

        <button
          onClick={verifyPayment}
          className="w-full mt-5 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
        >
          Verify Payment
        </button>

      </div>
    </main>
  );
}
