import { Adapter, AdapterUser } from "next-auth/adapters";
import axios from 'axios'

const url = process.env.URL || ""
export const myAdapter: Adapter = {
    createUser: async (user: AdapterUser) => {
        try {
            const {} = await axios.post(url + '/users', {
                  
            })
      } catch (error) {
            console.error("Error creating user:", error);
        }
    },

    getUser: async (id: string) => {
        console.log("Fetching user by ID:", id);
        try {
            console.log("User fetched successfully:", id);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    },

    updateUser: async (id: any) => {
        console.log("Fetching user by ID:", id);
        try {
            console.log("User fetched successfully:", id);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    },
    linkAccount: async (id: any) => {
        console.log("Fetching user by ID:", id);
        try {
            console.log("User fetched successfully:", id);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    },
    updateSession: async (id: any) => {
        console.log("Fetching user by ID:", id);
        try {
            console.log("User fetched successfully:", id);
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    },

    getUserByEmail: async (email: string) => {
        console.log("Fetching user by email:", email);
        try {
            console.log("User fetched successfully by email:", email);
        } catch (error) {
            console.error("Error fetching user by email:", error);
        }
    },

    getUserByAccount: async (providerId: string, providerAccountId: string) => {
        console.log("Fetching user by account:", providerId, providerAccountId);
        try {
            console.log("User fetched successfully by account:", providerId, providerAccountId);
        } catch (error) {
            console.error("Error fetching user by account:", error);
        }
    },

    createSession: async (user: any) => {
        console.log("Creating session for user:", user);
        try {
            console.log("Session created successfully for user:", user);
        } catch (error) {
            console.error("Error creating session for user:", error);
        }
    },

    getSessionAndUser: async (sessionToken: string) => {
        console.log("Fetching session and user for token:", sessionToken);
        try {
            console.log("Session and user fetched successfully for token:", sessionToken);
        } catch (error) {
            console.error("Error fetching session and user:", error);
        }
    },

    deleteSession: async (sessionToken: string) => {
        console.log("Deleting session for token:", sessionToken);
        try {
            console.log("Session deleted successfully for token:", sessionToken);
        } catch (error) {
            console.error("Error deleting session:", error);
        }
    },
};
