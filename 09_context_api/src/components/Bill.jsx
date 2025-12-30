import React, { useContext } from 'react';
import { CartContext } from '../context/Bill';

const Bill = () => {
  // 1. Consume the items from Context instead of hardcoding them
  const { items } = useContext(CartContext);

  // 2. Calculate totals dynamically based on the Context items
  // Since items are added to the array one by one, we sum the price of every object in the array
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const tax = items.length > 0 ? 5 : 0; // Only add tax if there are items
  const total = subtotal + tax;

  return (
    <div className="text-white">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag text-primary h-5 w-5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>

      {/* 3. Map over Context items */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {items.length === 0 ? (
          <p className="text-muted-foreground text-center py-10">Your cart is empty</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="bg-background hover:bg-muted/50 flex items-start gap-4 rounded-lg border p-3 transition-colors">
              <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                <img alt={item.title} className="h-full w-full object-cover p-1" src={item.img} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="leading-tight font-semibold">{item.title}</p>
                <p className="text-muted-foreground text-xs">Unit Price: ₹{item.price}</p>
              </div>
              <p className="font-semibold">₹{item.price}</p>
            </div>
          ))
        )}
      </div>

      <hr className="my-6 border-border" />

      {/* Calculation Section */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">{items.length > 0 ? "Free" : "₹0"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax estimate</span>
          <span className="font-medium">₹{tax}</span>
        </div>
      </div>

      <hr className="my-4 border-border" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Total</span>
        <span className="text-2xl font-bold">₹{total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Bill;