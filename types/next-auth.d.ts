/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
    accessToken?: string;
  }

  interface Session {
    user: User;
    accessToken?: string;
  }

  interface JWT {
    user: User;
    accessToken?: string;
  }
}
