import { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { servicesCarousel } from '../../constants';
import { Chevron } from '../../../public/assets/images/icons/chevron';

const slideWidth = 400;
const slideMargin = 20;

const scrollToSlide = (slider, slideIndex) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: 'smooth',
  });
};

const ServicesCarousel = () => {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <section className="min-h-screen py-16">
      <div className="h-[500px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex h-[540px] pb-10 overflow-x-auto snap-x snap-mandatory"
        >
          {servicesCarousel.map((slide) => (
            <li
              className="snap-start snap-always shrink-0 mr-5 last:mr-0 text-white"
              key={slide.id}
            >
              <div className="slide-center relative flex h-full flex-col bg-zinc w-[400px] rounded-2xl">
                <div
                  className={classNames(
                    'flex h-full justify-center items-center'
                  )}
                >
                  <img
                    className="object-cover"
                    src={slide.img}
                    alt={slide.title}
                    width={slide.imageWidth}
                    height={slide.imageHeight}
                  />
                </div>
                <h3 className="mt-auto text-2xl font-semibold p-6">
                  {slide.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="disabled:text-white disabled:border-white w-8 h-8 border-2 border-zinc rounded-full flex items-center justify-center mr-2"
        >
          <span className="sr-only">Previous slide</span>
          <Chevron className="w-3 h-3" />
        </button>
        <button
          disabled={
            scrolledToEndOfSlider || currentSlide === servicesCarousel.length
          }
          onClick={() => goToNextSlide()}
          className="disabled:text-white disabled:border-white w-8 h-8 border-2 border-zinc rounded-full flex items-center justify-center"
        >
          <span className="sr-only">Next slide</span>
          <Chevron className="rotate-180 w-3 h-3" />
        </button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
