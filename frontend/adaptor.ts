import { Adapter } from "next-auth/adapters";

export const myAdapter: Adapter = {
      createUser: async () => {}, // hande creating account too
      getUser: async () => {},
      getUserByEmail: async () => {},
      getUserByAccount: async () => {},
      createSession: async () => {},
      getSessionAndUser: async () => {},
      deleteSession: async () => {},
}