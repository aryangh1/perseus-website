import { secondGalleryImg } from '../constants';

const SecondGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 max-sm:gap-2 gap-4 px-24 max-sm:px-12 mb-6">
      {secondGalleryImg.map((secondImg) => (
        <div className="grid gap-4" key={secondImg.id}>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer transition ease-in-out hover:opacity-75 duration-300"
              src={secondImg.srcImg}
              alt="our photography images"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecondGallery;
