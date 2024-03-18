import { Client, Account, Databases, Storage, Avatars } from "appwrite";

declare module "./config" {
  interface AppwriteConfig {
    projectId: string;
    url: string;
  }

  export const appwriteConfig: AppwriteConfig;
  export const client: Client;
  export const account: Account;
  export const databases: Databases;
  export const storage: Storage;
  export const avatars: Avatars;
}
