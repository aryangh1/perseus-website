import Instafeed from 'instafeed.js';

const feed = new Instafeed({
  accessToken: 'your-token',
});
feed.run();
const InstaFeed = () => {
  return <div>InstaFeed</div>;
};

export default InstaFeed;
