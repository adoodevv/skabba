'use client'
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContextType, AppContextProviderProps, CartItems, UserData } from "../types";
import { Product } from "../types/types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY || 'USD';
    const router = useRouter();

    const { user } = useUser();
    const { getToken } = useAuth();

    const [products, setProducts] = useState<Product[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isSeller, setIsSeller] = useState(false);
    const [cartItems, setCartItems] = useState<CartItems>({});

    const fetchProductData = async () => {
        try {
            const { data } = await axios.get('/api/product/list');

            if (data.success) {
                setProducts(data.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    };

    const fetchUserData = async () => {
        try {
            if (user?.publicMetadata?.role === 'seller') {
                setIsSeller(true);
            }

            const token = await getToken();

            const { data } = await axios.get('/api/user/data', { headers: { Authorization: `Bearer ${token}` } });

            if (data.success) {
                setUserData(data.user);
                setCartItems(data.user.cartItems);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    };

    const addToCart = async (itemId: string) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        if (user) {
            try {
                const token = await getToken()

                await axios.post('/api/cart/update', { cartData }, { headers: { Authorization: `Bearer ${token}` } })
                toast.success('Item added to cart');
            } catch (error) {
                toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
            }
        }
    };

    const updateCartQuantity = async (itemId: string, quantity: number) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
        if (user) {
            try {
                const token = await getToken()

                await axios.post('/api/cart/update', { cartData }, { headers: { Authorization: `Bearer ${token}` } })
                toast.success('Cart updated');
            } catch (error) {
                toast.error(error instanceof Error ? error.message : 'An unknown error occurred');
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = products.find((product) => product._id === items);
            if (itemInfo && cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    useEffect(() => {
        if (user) {
            fetchUserData();
        }
    }, [user]);

    const value: AppContextType = {
        user,
        getToken,
        currency,
        router,
        isSeller,
        setIsSeller,
        userData,
        fetchUserData,
        products,
        fetchProductData,
        cartItems,
        setCartItems,
        addToCart,
        updateCartQuantity,
        getCartCount,
        getCartAmount
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};