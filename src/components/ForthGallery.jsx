import { forthGalleryImg } from '../constants';

const ForthGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 max-sm:gap-2 gap-4 px-24 max-sm:px-12 mb-24">
      {forthGalleryImg.map((forthImg) => (
        <div className="grid gap-4" key={forthImg.id}>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer transition ease-in-out hover:opacity-75 duration-300"
              src={forthImg.srcImg}
              alt="our photography images"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForthGallery;
