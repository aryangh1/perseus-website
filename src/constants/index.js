import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  videographyImg,
  socialMediaManagementImg,
  brandingImg,
  photoImg,
  webDesignImg,
  contentCreationImg,
} from '../utils';

export const navLists = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Collabration',
    href: '/#collabration',
  },
  {
    id: 3,
    label: 'Production',
    href: '#production',
  },
  {
    id: 4,
    label: 'Contact',
    href: '/',
  },
  {
    id: 5,
    label: 'About',
    href: '/',
  },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      'Enter A17 Pro.',
      'Game‑changing chip.',
      'Groundbreaking performance.',
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['Titanium.', 'So strong. So light. So Pro.'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      'iPhone 15 Pro Max has the',
      'longest optical zoom in',
      'iPhone ever. Far out.',
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['All-new Action button.', 'What will yours do?.'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro in Blue Titanium',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in White Titanium',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro in Black Titanium',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
];

export const servicesSection = [
  {
    id: 1,
    title: 'Branding',
    desc: "We create unique brands that make your business stand out. It's not just about logos, but building a strong identity that truly represents you.",
    icon: brandingImg,
  },
  {
    id: 2,
    title: 'Videography',
    desc: "Our videos are more than just footage – they are stories told with quality and style. We focus on making each video a reflection of your brand's heart and soul.",
    icon: videographyImg,
  },
  {
    id: 3,
    title: 'Social Media Management',
    desc: 'We handle your social media with care, making sure every post speaks to your audience and builds your online community',
    icon: socialMediaManagementImg,
  },
  {
    id: 4,
    title: 'Content Creation',
    desc: "We create content that speaks to your customers. It's engaging, thoughtful, and always aligned with what your audience wants to see and hear.",
    icon: contentCreationImg,
  },
  {
    id: 5,
    title: 'Web Design',
    desc: 'Our websites are easy to use and beautiful to look at. We balance design and function to make sure your website is a hit with your customers.',
    icon: webDesignImg,
  },
  {
    id: 6,
    title: 'Photography',
    desc: 'Our photography captures the essence of your brand in every shot. We focus on quality, ensuring each image tells a story and connects with your audience.',
    icon: photoImg,
  },
];

export const footerLinks = [
  'Privacy Policy',
  'Terms of Use',
  'Sales Policy',
  'Legal',
  'Site Map',
];
