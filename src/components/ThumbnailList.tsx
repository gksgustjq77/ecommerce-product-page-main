interface ThumbnailListProps {
  images: Array<string>;
  selected: number;
  onSelect: (index: number) => void;
}

const ThumbnailList: React.FC<ThumbnailListProps> = ({
  images,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex w-full gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          onClick={() => onSelect(i)}
          className={`h-[100px] w-[25%] cursor-pointer rounded-lg border-2 transition ${
            i === selected
              ? "border-orange-500 opacity-60"
              : "border-transparent"
          }`}
          alt={`Thumbnail ${i}`}
        />
      ))}
    </div>
  );
};

export default ThumbnailList;
