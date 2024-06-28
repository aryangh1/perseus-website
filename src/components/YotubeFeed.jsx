import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const YotubeFeed = ({ embedId }) => {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-sm duration-1000 mt-6 hover:opacity-80 max-2xl:flex-grow max-sm:flex-col"
      src={`https://www.youtube.com/embed/${embedId}`}
      width={450}
      height={300}
    ></iframe>
  );
};

YotubeFeed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YotubeFeed;
