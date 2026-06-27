"use client";

import { useEffect, useState } from "react";

export default function Settings() {
  const [storeName, setStoreName] =
    useState("AMANNY STORE");

  const [whatsapp, setWhatsapp] =
    useState("7629970920");

  const [paymentNumber, setPaymentNumber] =
    useState("7629970920");

  const [storeLink, setStoreLink] =
    useState("");

  useEffect(() => {
    setStoreName(
      localStorage.getItem("storeName") ||
        "AMANNY STORE"
    );

    setWhatsapp(
      localStorage.getItem("whatsapp") ||
        "7629970920"
    );

    setPaymentNumber(
      localStorage.getItem("paymentNumber") ||
        "7629970920"
    );

    setStoreLink(
      localStorage.getItem("storeLink") || ""
    );
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "storeName",
      storeName
    );

    localStorage.setItem(
      "whatsapp",
      whatsapp
    );

    localStorage.setItem(
      "paymentNumber",
      paymentNumber
    );

    localStorage.setItem(
      "storeLink",
      storeLink
    );

    alert("Settings Saved ✅");
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{
        backgroundImage:
          "url('/settings-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-xl mx-auto">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Settings
        </h1>

        <div className="bg-gray-900/80 backdrop-blur-md border border-cyan-500 rounded-3xl p-6">

          <label>Store Name</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) =>
              setStoreName(e.target.value)
            }
            className="w-full mt-2 mb-4 p-3 rounded-xl bg-gray-800"
          />

          <label>WhatsApp Number</label>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) =>
              setWhatsapp(e.target.value)
            }
            className="w-full mt-2 mb-4 p-3 rounded-xl bg-gray-800"
          />

          <label>Payment Number</label>
          <input
            type="text"
            value={paymentNumber}
            onChange={(e) =>
              setPaymentNumber(e.target.value)
            }
            className="w-full mt-2 mb-4 p-3 rounded-xl bg-gray-800"
          />

          <label>Store Link</label>
          <input
            type="text"
            value={storeLink}
            onChange={(e) =>
              setStoreLink(e.target.value)
            }
            className="w-full mt-2 mb-4 p-3 rounded-xl bg-gray-800"
          />

          <button
            onClick={saveSettings}
            className="w-full mt-5 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold"
          >
            Save Settings
          </button>

        </div>

      </div>
    </main>
  );
}
