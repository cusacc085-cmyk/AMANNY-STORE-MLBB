async function placeOrder() {

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
        packageName: product,
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
  }
}
