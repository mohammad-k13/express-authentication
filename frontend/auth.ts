import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { myAdapter } from "./adaptor";

export const { handlers, signIn, signOut, auth } = NextAuth({
    // adapter: myAdapter,
    providers: [
        GitHub({
            clientId: "Ov23linejx5ObDbpC5x5",
            clientSecret: "69cc95b9c64884242bae38fed47147d38f8fea29",
        }),
    ],
});
