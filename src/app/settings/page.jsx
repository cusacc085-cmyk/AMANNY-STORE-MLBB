"use client";

import { useState } from "react";

export default function Settings() {
  const [storeName, setStoreName] =
    useState("AMANNY STORE");

  const saveSettings = () => {
    localStorage.setItem(
      "storeName",
      storeName
    );

    alert("Settings Saved");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Settings
      </h1>

      <div className="max-w-md bg-gray-900 border border-cyan-500 rounded-3xl p-6">
        <label>Store Name</label>

        <input
          type="text"
          value={storeName}
          onChange={(e) =>
            setStoreName(e.target.value)
          }
          className="w-full mt-2 p-3 rounded-xl bg-gray-800"
        />

        <button
          onClick={saveSettings}
          className="w-full mt-5 bg-cyan-500 py-3 rounded-xl"
        >
          Save Settings
        </button>
      </div>
    </main>
  );
}
