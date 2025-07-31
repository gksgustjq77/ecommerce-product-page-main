import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartAtom } from "../store/cartAtom";
import CartInfoModal from "./CartInfoModal";

const UserMenu: React.FC = () => {
  const [cartItem, _] = useAtom(cartAtom);

  useEffect(() => {}, [cartItem]);

  return (
    <div className="flex items-center gap-8">
      <div className="relative cursor-pointer text-gray-700 hover:text-orange-500">
        <img
          src="/images/icon-cart.svg"
          alt="cart"
          className="h-full w-full object-cover"
        ></img>

        <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1 text-xs text-white">
          {cartItem.length || 0}
        </span>
      </div>

      <Link
        to="/profile"
        className="block h-10 w-10 overflow-hidden rounded-full"
      >
        <img
          src="/images/image-avatar.png"
          alt="User Profile"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="absolute right-0 top-full z-10 mt-4 w-[320px] max-w-[420px]">
        <CartInfoModal cartItem={cartItem}></CartInfoModal>
      </div>
    </div>
  );
};

export default UserMenu;
