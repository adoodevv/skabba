import { Product } from "./types";

export interface CartItems {
   [key: string]: number;
}

export interface UserData {
   cartItems: CartItems;
   // Add other user data properties as needed
}

export interface AppContextType {
   user: any; // Temporarily using 'any' until UserResource is defined
   getToken: () => Promise<string | null>;
   currency: string;
   router: any; // Using any for router since it's from Next.js
   isSeller: boolean;
   setIsSeller: (value: boolean) => void;
   userData: UserData | null;
   fetchUserData: () => Promise<void>;
   products: Product[];
   fetchProductData: () => Promise<void>;
   cartItems: CartItems;
   setCartItems: (items: CartItems) => void;
   addToCart: (itemId: string) => Promise<void>;
   updateCartQuantity: (itemId: string, quantity: number) => Promise<void>;
   getCartCount: () => number;
   getCartAmount: () => number;
}

export interface AppContextProviderProps {
   children: React.ReactNode;
} 