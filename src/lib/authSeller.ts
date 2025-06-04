import { clerkClient } from '@clerk/nextjs/server';
import { AuthResponse, User } from '@/types/types';

const authSeller = async (userId: string): Promise<AuthResponse> => {
   try {
      const client = await clerkClient();
      const clerkUser = await client.users.getUser(userId);

      if (clerkUser.publicMetadata?.role === 'seller') {
         const user: User = {
            id: clerkUser.id,
            email: clerkUser.emailAddresses[0]?.emailAddress || '',
            firstName: clerkUser.firstName || undefined,
            lastName: clerkUser.lastName || undefined,
            role: clerkUser.publicMetadata?.role as 'user' | 'seller' | 'admin',
            publicMetadata: clerkUser.publicMetadata
         };
         return { success: true, user };
      } else {
         return { success: false, message: 'User is not a seller' };
      }
   } catch (error) {
      return {
         success: false,
         message: error instanceof Error ? error.message : 'An unknown error occurred'
      };
   }
}

export default authSeller;