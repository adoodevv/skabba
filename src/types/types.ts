import { NextRouter } from 'next/router';
import { ChangeEvent } from 'react';

export interface Product {
   _id: string;
   name: string;
   description: string;
   image: string[];
   offerPrice: number;
   originalPrice?: number;
   price?: number;
   category?: string;
   stock?: number;
   rating?: number;
   userId?: string;
   date?: number;
   __v?: number;
}

export interface CartItem extends Product {
   quantity: number;
}

export interface Order {
   _id: string;
   userId: string;
   items: {
      product: Product;
      quantity: number;
      _id: string;
   }[];
   amount: number;
   status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
   date: number;
   address: Address;
   __v?: number;
}

export interface Address {
   _id: string;
   userId: string;
   fullName: string;
   phoneNumber: string;
   pincode: number;
   area: string;
   city: string;
   state: string;
   __v?: number;
}

export interface AppContextType {
   currency: string;
   router: NextRouter;
   cart: CartItem[];
   addToCart: (product: Product) => void;
   removeFromCart: (productId: string) => void;
   updateCartItemQuantity: (productId: string, quantity: number) => void;
   clearCart: () => void;
}

export interface User {
   id: string;
   email: string;
   firstName?: string;
   lastName?: string;
   role?: 'user' | 'seller' | 'admin';
   publicMetadata?: {
      role?: string;
   };
}

export interface AuthResponse {
   success: boolean;
   message?: string;
   user?: User;
}

// Global type declarations
declare global {
   var mongoose: {
      conn: any;
      promise: any;
   };
} 