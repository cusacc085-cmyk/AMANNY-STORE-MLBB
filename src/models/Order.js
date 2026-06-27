import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userEmail: String,
    userId: String,
    serverId: String,
    packageName: String,
    amount: String,
    transactionId: String,
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    rechargeStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
