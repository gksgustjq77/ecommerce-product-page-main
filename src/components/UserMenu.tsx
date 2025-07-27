import React from "react";
import { Link } from "react-router-dom";

const UserMenu: React.FC = () => {
  return (
    <div className="flex items-center gap-8">
      {/* 장바구니 아이콘 */}
      <Link to="/cart" className="relative text-gray-700 hover:text-orange-500">
        {/* SVG 아이콘: 장바구니 */}
        <img
          src="/images/icon-cart.svg"
          alt="cart"
          className="h-full w-full object-cover"
        ></img>
        {/* 만약 장바구니 아이템 수 표시 필요하면 아래처럼 배지 추가 가능 */}
        {/* <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-1 text-xs text-white">
          3
        </span> */}
      </Link>

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
    </div>
  );
};

export default UserMenu;
