import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userEmail: String,

    gameId: String,
    serverId: String,

    server: String,
    packageName: String,

    amount: String,

    transactionId: String,

    paymentStatus: {
      type: String,
      default: "pending",
    },

    rechargeStatus: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default (
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    OrderSchema
  )
);
