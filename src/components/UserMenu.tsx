import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartAtom } from "../store/cartAtom";
import CartInfoModal from "./CartInfoModal";

const UserMenu: React.FC = () => {
  const [cartItem, _] = useAtom(cartAtom);

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  return (
    <div className="flex items-center gap-8">
      {/* 장바구니 아이콘 */}
      <div className="relative cursor-pointer text-gray-700 hover:text-orange-500">
        {/* SVG 아이콘: 장바구니 */}
        <img
          src="/images/icon-cart.svg"
          alt="cart"
          className="h-full w-full object-cover"
        ></img>
        {/* 만약 장바구니 아이템 수 표시 필요하면 아래처럼 배지 추가 가능 */}
        <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1 text-xs text-white">
          {cartItem.length || 0}
        </span>
      </div>

      {/* 프로필 이미지 */}
      <Link
        to="/profile"
        className="block h-10 w-10 overflow-hidden rounded-full"
      >
        <img
          src="/images/image-avatar.png" // 예시 프로필 이미지 URL
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
