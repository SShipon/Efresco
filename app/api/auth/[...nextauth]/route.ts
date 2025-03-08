/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🔹 Received Credentials:", credentials); // ✅ Debugging

        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, credentials);
          console.log("✅ API Response:", res.data); // ✅ Backend response check

          return res.data; // Ensure API returns { name, email, role, token }
        } catch (error: any) {
          console.error("❌ Login Error:", error.response?.data || error.message);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

export { handler as GET, handler as POST };