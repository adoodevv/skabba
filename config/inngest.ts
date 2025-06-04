import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "skabba" });

// Ingest function to save user data to database
export const syncUserCreation = inngest.createFunction(
   {
      id: "sync-user-from-clerk",
   },
   { event: 'clerk/user.created' },
   async ({ event }) => {

   }
);