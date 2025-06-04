'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import { Order, Product } from '@/types/types';

const Orders = () => {

   const { currency } = useAppContext();

   const [orders, setOrders] = useState<Order[]>([]);
   const [loading, setLoading] = useState(true);

   const fetchSellerOrders = async () => {
      // Simulate API call
      setTimeout(() => {
         const orderDummyData: Order[] = [
            {
               _id: '1',
               userId: 'user1',
               items: [
                  {
                     product: {
                        _id: '1',
                        userId: 'seller1',
                        name: 'Product 1',
                        description: 'Description 1',
                        price: 100,
                        offerPrice: 80,
                        image: ['image1.jpg'],
                        category: 'Category 1',
                        date: Date.now(),
                        __v: 0
                     },
                     quantity: 2,
                     _id: 'item1'
                  }
               ],
               amount: 160,
               status: 'pending' as const,
               date: Date.now(),
               address: {
                  _id: 'addr1',
                  userId: 'user1',
                  fullName: 'John Doe',
                  phoneNumber: '1234567890',
                  pincode: 123456,
                  area: 'Area 1',
                  city: 'City 1',
                  state: 'State 1',
                  __v: 0
               },
               __v: 0
            }
         ];
         setOrders(orderDummyData);
         setLoading(false);
      }, 1000);
   }

   useEffect(() => {
      fetchSellerOrders();
   }, []);

   return (
      <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
         {loading ? <Loading /> : <div className="md:p-10 p-4 space-y-5">
            <h2 className="text-lg font-medium">Orders</h2>
            <div className="max-w-4xl rounded-md">
               {orders.map((order, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-gray-300">
                     <div className="flex-1 flex gap-5 max-w-80">
                        <Image
                           className="max-w-16 max-h-16 object-cover"
                           src={assets.box_icon}
                           alt="box_icon"
                        />
                        <p className="flex flex-col gap-3">
                           <span className="font-medium">
                              {order.items.map((item: { product: Product; quantity: number }) => item.product.name + ` x ${item.quantity}`).join(", ")}
                           </span>
                           <span>Items : {order.items.length}</span>
                        </p>
                     </div>
                     <div>
                        <p>
                           <span className="font-medium">{order.address.fullName}</span>
                           <br />
                           <span >{order.address.area}</span>
                           <br />
                           <span>{`${order.address.city}, ${order.address.state}`}</span>
                           <br />
                           <span>{order.address.phoneNumber}</span>
                        </p>
                     </div>
                     <p className="font-medium my-auto">{currency}{order.amount}</p>
                     <div>
                        <p className="flex flex-col">
                           <span>Method : COD</span>
                           <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                           <span>Payment : Pending</span>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>}
         <Footer />
      </div>
   );
};

export default Orders;