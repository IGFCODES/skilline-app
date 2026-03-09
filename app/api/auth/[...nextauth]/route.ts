import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // Temporary login logic
        if (
          credentials?.email === "admin@skilline.com" &&
          credentials?.password === "123456"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@skilline.com",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
