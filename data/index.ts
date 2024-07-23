export type Listing = {
  imageUrl: string;
  imageUrls: string[];
  statusLabel: string;
  price: string;
  streetAddress: string;
  city: string;
  province: string;
  bed: number;
  bath: number;
  sqft: number;
};

const data = [
  {
    imageUrl: require('../images/church-street/1.png'),
    imageUrls: [
      require('../images/church-street/1.png'),
      require('../images/church-street/2.png'),
      require('../images/church-street/3.png'),
      require('../images/church-street/4.png'),
      require('../images/church-street/5.png'),
    ],
    statusLabel: 'For Sale',
    price: '$679,000',
    streetAddress: '403 Church Street',
    city: 'Toronto',
    province: 'ON',
    bed: 1,
    bath: 2,
    sqft: 600,
  },
  {
    imageUrl: require('../images/sycamore-gdns/1.png'),
    imageUrls: [
      require('../images/sycamore-gdns/1.png'),
      require('../images/sycamore-gdns/2.png'),
      require('../images/sycamore-gdns/3.png'),
      require('../images/sycamore-gdns/4.png'),
      require('../images/sycamore-gdns/5.png'),
    ],
    statusLabel: 'For Sale',
    price: '$1,475,000',
    streetAddress: '1448 Sycamore Gardens',
    city: 'Milton',
    province: 'ON',
    bed: 5,
    bath: 5,
    sqft: 2540,
  },
  {
    imageUrl: require('../images/finch-ave/1.png'),
    imageUrls: [
      require('../images/finch-ave/1.png'),
      require('../images/finch-ave/2.png'),
      require('../images/finch-ave/3.png'),
      require('../images/finch-ave/4.png'),
      require('../images/finch-ave/5.png'),
    ],
    statusLabel: 'For Sale',
    price: '$1,499,900',
    streetAddress: '400 Finch Ave',
    city: 'Pickering',
    province: 'ON',
    bed: 4,
    bath: 6,
    sqft: 2390,
  },
];

export default data;
