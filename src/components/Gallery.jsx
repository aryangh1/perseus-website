import { galleryImg } from '../constants';

const Gallery = () => {
  return (
    <section className="grid grid-cols-2 gap-2 px-24 max-sm:px-12">
      {galleryImg.map((clientImg) => (
        <div key={clientImg.id} className="overflow-hidden">
          <img
            className="h-auto max-w-full rounded-lg hover:scale-125 duration-1000"
            src={clientImg.srcImg}
            alt="photo"
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
