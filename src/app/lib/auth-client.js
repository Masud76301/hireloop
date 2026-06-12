import { createAuthClient } from "better-auth/react";

console.log("BASE URL:", process.env.BETTER_AUTH_URL);

export const authClient = createAuthClient({
        baseURL: process.env.NEXT_PUBLIC_APP_URL,

});

export const { useSession, signIn, signUp, signOut } = authClient;
