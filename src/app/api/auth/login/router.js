import bcrypt from "bcryptjs";

import User from "@/models/User";

import {
  connectDB,
} from "@/lib/mongodb";

import {
  cookies,
} from "next/headers";

export async function POST(req) {

  try {

    await connectDB();

    const {
      email,
      password,
    } = await req.json();

    const user =
      await User.findOne({
        email,
      });

    if (!user) {

      return Response.json(
        {
          error:
            "User not found",
        },
        {
          status: 400,
        }
      );
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!valid) {

      return Response.json(
        {
          error:
            "Invalid password",
        },
        {
          status: 400,
        }
      );
    }

    const cookieStore =
      await cookies();

    cookieStore.set(
      "user",
      user.email,
      {
        httpOnly: true,
        secure:
          process.env
            .NODE_ENV ===
          "production",
        path: "/",
        maxAge:
          60 *
          60 *
          24 *
          30,
      }
    );

    return Response.json({
      success: true,
    });

  } catch (error) {

    return Response.json(
      {
        error:
          "Login failed",
      },
      {
        status: 500,
      }
    );
  }
}
