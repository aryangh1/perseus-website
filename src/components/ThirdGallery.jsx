import { thirdGalleryImg } from '../constants';

const ThirdGallery = () => {
  return (
    <div className="mx-auto px-24 max-sm:px-12 mb-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {thirdGalleryImg.map((thirdImg) => (
          <div className="flex w-1/3 flex-wrap" key={thirdImg.id}>
            <div className="w-full p-1 md:p-2 ">
              <img
                alt="our photography images"
                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer transition ease-in-out hover:saturate-150 duration-300"
                src={thirdImg.srcImg}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdGallery;
