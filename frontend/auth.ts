import NextAuth from 'next-auth'
//providers
import Credentials from "next-auth/providers/credentials"

export const {handlers, signIn, signOut, auth} = NextAuth({
      providers: [
            Credentials({
                  credentials: {
                        email: {},
                        password: {}
                  },
                  authorize: async (credetials) => {
                        if(!credetials) return null;

                        const { email, password } = credetials;
                        console.log(email, password)

                        return {id: ""};
                  }
            })
      ],
})