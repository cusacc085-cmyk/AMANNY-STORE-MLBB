"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const router = useRouter();

  const [transactionId, setTransactionId] =
    useState("");

  const verifyPayment = () => {
    if (!transactionId) {
      alert("Enter Transaction ID");
      return;
    }

    localStorage.setItem(
      "transactionId",
      transactionId
    );

    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-gray-900 border border-cyan-500 rounded-3xl p-8 w-[400px]">
        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Payment Verification
        </h1>

        <p className="mt-4 text-center">
          GPay / Paytm
        </p>

        <p className="text-center text-2xl text-green-400 font-bold mt-2">
          7629970920
        </p>

        <img
          src="/payment-qr.png"
          alt="QR"
          className="w-48 mx-auto mt-4"
        />

        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(e.target.value)
          }
          className="w-full mt-5 p-3 rounded-xl bg-gray-800"
        />

        <button
          onClick={verifyPayment}
          className="w-full mt-5 bg-green-500 py-3 rounded-xl"
        >
          Verify Payment
        </button>
      </div>
    </main>
  );
}
