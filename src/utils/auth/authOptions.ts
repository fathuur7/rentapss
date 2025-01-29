// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 // Validasi user dari database
//                 const user = await getUser(credentials.email, credentials.password);
//                 if (user) {
//                     return user;
//                 }
//                 return null;
//             },
//         }),
//     ],
//     session: {
//         strategy: "jwt", // Pastikan strategi JWT digunakan
//     },
//     secret: process.env.JWT_SECRET, // Pastikan SECRET sudah diset
//     callbacks: {
//         async jwt({ token, user } = {}) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session({ session, token } = {}) {
//             session.user.id = token.id;
//             return session;
//         },
//     },
//     cookies: {
//         sessionToken: {
//             name: `next-auth.session-token`,
//             options: {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === "production",
//                 sameSite: "lax",
//                 path: "/",
//             },
//         },
//     },
// };

// export default NextAuth(authOptions);
