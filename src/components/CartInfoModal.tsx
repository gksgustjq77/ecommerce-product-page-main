import type { ProductType } from "../type/product/product";

interface CartInfoModalProps {
  cartItem: ProductType[];
  open: boolean;
}

const CartInfoModal: React.FC<CartInfoModalProps> = ({ cartItem, open }) => {
  if (!open) return false;
  const countPrice = (cartItem: ProductType) => {
    return (cartItem.price - cartItem.price * cartItem.discount).toLocaleString(
      "ko-KR",
    );
  };

  const finalPrice = (cartItem: ProductType) => {
    const count = cartItem.count ?? 0;
    return (
      (cartItem.price - cartItem.price * cartItem.discount) *
      count
    ).toLocaleString("ko-KR");
  };

  return (
    <div className="rounded-lg bg-white shadow-xl">
      <div className="border-b p-4 text-left font-bold">Cart</div>

      {cartItem.length === 0 ? (
        <div className="text-neutral-dark-grayish-blue p-14 text-sm font-semibold">
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cartItem.map((e) => {
            return (
              <div className="flex items-center justify-around gap-4 p-4">
                <div className="w-[50px]">
                  <img
                    src={`${e.images?.thumbnail}`}
                    alt="cart-thumbnail"
                    className="rounded-sm"
                  ></img>
                </div>
                <div className="flex flex-col">
                  <div className="text-neutral-dark-grayish-blue">{e.name}</div>
                  <div className="">
                    <span className="text-neutral-dark-grayish-blue">
                      ${countPrice(e)} x {e.count}
                    </span>{" "}
                    <span className="font-bold"> ${finalPrice(e)}</span>
                  </div>
                </div>
                <div>
                  <img src="/images/icon-delete.svg" alt="delete"></img>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartInfoModal;
