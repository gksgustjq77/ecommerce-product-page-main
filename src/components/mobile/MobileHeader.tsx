import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { cartAtom } from "../../store/cartAtom";
import { useAtom } from "jotai";
import CartInfoModal from "../CartInfoModal";

const MobileHeader: React.FC = () => {
  const [cartItem, setCartItem] = useAtom(cartAtom);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [cartModalOpen, setCartModalOpen] = useState<boolean>(false);

  const deleteCartItem = (id: number) => {
    const deleteCartById = cartItem.filter((e) => e.id !== id);

    setCartItem(deleteCartById);
  };

  return (
    <div className="flex p-5">
      <header className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/icon-menu.svg"
            alt="menu"
            className="w-[20px]"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <img src="/images/logo.svg" alt="logo" className="w-[130px]"></img>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/images/icon-cart.svg"
            alt="cart"
            className="w-[30px]"
            onClick={() => setCartModalOpen(!cartModalOpen)}
          />
          <span className="absolute right-[4rem] top-[1rem] rounded-full bg-orange-500 px-1 text-xs text-white">
            {cartItem.length || 0}
          </span>
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="w-[30px] rounded-full"
          />
        </div>
      </header>
      <div className="absolute left-1/2 top-[6%] z-10 mt-4 w-full -translate-x-1/2 p-2">
        <CartInfoModal
          cartItem={cartItem}
          open={cartModalOpen}
          deleteCartItem={deleteCartItem}
        ></CartInfoModal>
      </div>
      {openMenu && <MobileMenu closeMenu={setOpenMenu} />}
    </div>
  );
};

export default MobileHeader;
