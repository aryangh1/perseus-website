import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const YotubeFeed = ({ embedId }) => {
  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video rounded-sm duration-1000 mt-6 hover:opacity-80"
      src={`https://www.youtube.com/embed/${embedId}`}
    ></iframe>
  );
};

YotubeFeed.PropTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YotubeFeed;
