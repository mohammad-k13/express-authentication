// import { Adapter } from "@auth/core/adapters";
// import { UserModel, SessionModel, AccountModel } from "./models"; // Custom Mongoose Models

// export const MongoDBAdapter: Adapter = {
//   async createUser(user) {
//     const newUser = new UserModel({
//       email: user.email,
//       name: user.name,
//       image: user.image,
//     });
//     await newUser.save();
//     return newUser;
//   },

//   async getUser(id) {
//     return UserModel.findById(id).exec();
//   },

//   async getUserByEmail(email) {
//     return UserModel.findOne({ email }).exec();
//   },

//   async getUserByAccount({ provider, providerAccountId }) {
//     const account = await AccountModel.findOne({ provider, providerAccountId }).exec();
//     if (account) {
//       return UserModel.findById(account.userId).exec();
//     }
//     return null;
//   },

//   async createSession(session) {
//     const newSession = new SessionModel({
//       userId: session.userId,
//       expires: session.expires,
//     });
//     await newSession.save();
//     return newSession;
//   },

//   async getSession(sessionToken) {
//     return SessionModel.findOne({ sessionToken }).exec();
//   },

//   async deleteSession(sessionToken) {
//     await SessionModel.deleteOne({ sessionToken }).exec();
//   },

//   // Additional methods like updateUser, linkAccount, unlinkAccount, etc.
// };

// export default MongoDBAdapter;