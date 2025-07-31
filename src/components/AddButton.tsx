interface AddButtonProps {
  addCart: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ addCart }) => {
  return (
    <>
      <div
        className="bg-primary-orange flex flex-1 cursor-pointer select-none justify-center rounded-md p-4"
        onClick={addCart}
      >
        <button className="flex items-center gap-4">
          <img src="/images/icon-cart.svg" alt="add" className=""></img>
          <span className="text-neutral-very-dark-blue font-bold">
            Add to cart
          </span>
        </button>
      </div>
    </>
  );
};
export default AddButton;
