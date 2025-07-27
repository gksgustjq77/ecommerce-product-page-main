interface LargeImageProps {
  image: string;
}

const LargeImage: React.FC<LargeImageProps> = ({ image }) => {
  return (
    <>
      <div className="">
        <img src={image} alt={`large-${image}`} className="rounded-lg"></img>
      </div>
    </>
  );
};

export default LargeImage;
