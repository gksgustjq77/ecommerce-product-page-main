interface AddButtonProps {
  addCart: () => void;
  title?: string;
  icon?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ addCart, title, icon }) => {
  return (
    <>
      <div
        className="bg-primary-orange flex flex-1 cursor-pointer select-none justify-center rounded-md p-4"
        onClick={addCart}
      >
        <button className="flex items-center gap-4">
          {icon && <img src={icon} alt="add" className=""></img>}
          <span className="text-neutral-very-dark-blue font-bold">
            {title || ""}
          </span>
        </button>
      </div>
    </>
  );
};
export default AddButton;
