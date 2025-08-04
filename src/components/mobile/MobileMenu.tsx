import { useEffect, useState } from "react";
import { Headers } from "../../const/header";

interface MobileMenuProps {
  closeMenu: (val: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const [height, _] = useState<number>(window.innerHeight);

  return (
    <div
      className="fixed left-0 top-0 z-[99999] flex w-1/2 flex-col gap-8 bg-white p-8 text-left font-bold transition-all duration-300"
      style={{ height: `${height}px` }}
    >
      <div className="mb-4">
        <img
          src="/images/icon-close.svg"
          alt="close"
          className="cursor-pointer"
          onClick={() => closeMenu(false)}
        />
      </div>

      {Headers.map((item, idx) => (
        <div key={idx} className="flex flex-col">
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
