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
    imageUrl:
      'https://images.expcloud.com/KOjFEWBCBRMc9+EqZrUBow==!8HkMbC/lvhPABH96ClJxRTO0JV64MpuhkHh8KMyXUyZIhQWjRlOJYZd8tkfpQp6nkSjrQvWeliJ7IfgtusfKIUaphXGSvvzyC4R8/s1XGocjtdIDilODv4liA6+Gt+xl?w=640',
    imageUrls: [
      'https://images.expcloud.com/KOjFEWBCBRMc9+EqZrUBow==!8HkMbC/lvhPABH96ClJxRTO0JV64MpuhkHh8KMyXUyZIhQWjRlOJYZd8tkfpQp6nkSjrQvWeliJ7IfgtusfKIUaphXGSvvzyC4R8/s1XGocjtdIDilODv4liA6+Gt+xl?w=640',
      'https://images.expcloud.com/THp8LjKh03Cr+Z2gu2XyEw==!cNcfSgd8oAkJsNHrvs8nlUUk8sKmyytIeaqvPAGpMkX/RaYiKE1H8nt77deSN3NvxhBQj/Jqtjf8nEf8B66S0tNIO81nHkGgn9++6AAmSgV9nvzQ1HOCXPRg4lstZMTD?w=640',
      'https://images.expcloud.com/ayEF63wSg8TAcYrgyG+9Ew==!b2qhQ36CCTKCUykZwfElu92Wkzepgq3LULz89N0sBV7H3r4UJ9MHRl87fSR9GTq4PdZPf4Ufb0GGsBs+pgDoHOgV1MxvFg+ablv3ECnu1KG3i3OhpA5FCW2J1LqO0l2U?w=640',
      'https://images.expcloud.com/ho3w7tIkZFQ06v1+qUUNoA==!gSaCLiZa1qLIiA7WL09fWUNS2HTK2AjcGL9hco9hR00+5q+bGuvgw/Oxbxh+KKFIYI25U0DNbX3Ag6Kie23c2UPHYiLEgrfQYql29hSmpr74Ui0R59Sr0ist+L2+OTsM?w=640',
      'https://images.expcloud.com/mUL+r981c7Oa4cEIbUVdbw==!KPXh30dlk3Kk98Py5Enak6FI4fb2i/6zPFxnqlQwdj/9W//Lyt+97E53uZfwanctU9IcApmjKJOyQGFnOHSnZAk5G80LDtclSso2s3NqLMz30Xog+/2b0nId+RZf4M/S?w=640',
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
    imageUrl:
      'https://images.expcloud.com/cU09D+ATsLxTyjg7IGY/YQ==!4DNiGpgZbjgon59BtZmp1hoCWpOL4o1Y/IdBsoR5Hx8JEstv82pqJi6+IrusXyUBS5rcwEdg60pGUnTyITYUGWHocvSRxYKbfTClVmNDoEkRXvtBJdmmB3n4FpX+lDUK?w=640',
    imageUrls: [
      'https://images.expcloud.com/cU09D+ATsLxTyjg7IGY/YQ==!4DNiGpgZbjgon59BtZmp1hoCWpOL4o1Y/IdBsoR5Hx8JEstv82pqJi6+IrusXyUBS5rcwEdg60pGUnTyITYUGWHocvSRxYKbfTClVmNDoEkRXvtBJdmmB3n4FpX+lDUK?w=640',
      'https://images.expcloud.com/GK34d71Hh12h1DzuTJrVxg==!n9l8NAq5cne34ko/YyV0TWDvrXI+I7epN5UltKNHVEV06J1m70SQS2h+YbIuzolSiZPfZxi2en2BWOvO3DOQc6/ibp3UhWiJT7Up6uo+XRHQLqUqDlI5AMtJejY/jypp?w=640',
      'https://images.expcloud.com//W3edYXUHWwayxtA4EsAMA==!25hg+tQhDjZ/9QupCmzyST1FWKEre4OCAl9MUs7vEQu4S32/qwW7G0lMQvsvmzELBZZq6GJGxsn7ilixaW6z5XRFpraNxgBFlvPXEPZ9aX66TddD0bD/QXzPSZYvAAGe?w=640',
      'https://images.expcloud.com/jw9X1Pll+ehkE2C7w563Ow==!I2yI2t3RrV3JZK0f/4BlV1a3Jmq3OvnlUjRQvAJnK/ehIrQlL03D7oOGG7Jga1tynnTOAcThwoeFUvsGLcaJOz4gm0atR8xA9KQ6GcMYuXF/sfTGxYWCeczJqnYQQBNl?w=640',
      'https://images.expcloud.com/iafIsPQuX9Y6/ZDRW7FRvg==!SCqowA7Njmh53UGetmFDSbX5h2WtANXu5rI6xsphJ/w2KmS8kRnZzx5RQ2pj1XMo+iazPCYc5v4o08vHke5U9Et03je99M/lcexEy6bade78TN+BAkZViXBbrDg24FV0?w=640',
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
    imageUrl:
      'https://images.expcloud.com/ldCBcvdfhQfhdWEOpWcluQ==!9wBPeIvHMpxQ1w1RgoEPtjXW/DDuZLbjgLt+gzkFbfhL6tOlCwyDh4Dzmw5MtQ+i/hqvcrx5+LP52Q3H+C3Fmqaov/9rtGHkw3GaP2QHvmekZ0iGuhd+wh1mtgUj2rO+?w=640',
    imageUrls: [
      'https://images.expcloud.com/ldCBcvdfhQfhdWEOpWcluQ==!9wBPeIvHMpxQ1w1RgoEPtjXW/DDuZLbjgLt+gzkFbfhL6tOlCwyDh4Dzmw5MtQ+i/hqvcrx5+LP52Q3H+C3Fmqaov/9rtGHkw3GaP2QHvmekZ0iGuhd+wh1mtgUj2rO+?w=640',
      'https://images.expcloud.com/HmpXBnKtVuHQNobxH1u5Lw==!DoMEl0XVrKqjNTK9gGw9DcBJ8l+/VU9vcgzVyRVJh+HF5C79YbmLoqXOJoH3D0nTdMksfIjDmbG12WgFcPd+f26cLLn4henByHF+2Jjy2AiIhtRT3g02X/AKl/uzU8MH?w=640',
      'https://images.expcloud.com/WqmtFt6F8fYk4mSAj/XErw==!wKqomdwTwL06VbqkRXJPC0nQONyjczAYbjrmIbfHD6/4YPKVM8QUuWM99z0h3tqbcz5N9Xitwamc85GjsFqSEgx0PMsQcTr29tba001zyqxvO+/8aIX4QV3coZ8UbgdC?w=640',
      'https://images.expcloud.com/mdFO3PDJxoO1YDyaZN2xeg==!ddbKh56tkchMTsfq9ZWlSvoW/D9Uh+h4zIYI1KAw5jdV2moqf+KNEnSvKVA7BYd0oGe/BtotKDj7jVFriPDoKlkBVdGQ4Wq6ZIRCAhGQScXA3RG5w9tCpKpIlTB8W1Qm?w=640',
      'https://images.expcloud.com/7HXmel5Jyk5odgwqzCjrwA==!ISxd3+66M+JqYZRgDSI3/9LefdCvdtXMvdWM8qMQjkjwnDSbJEOA6LAe3zvaoyC7v1/JSZ3E7l6LoOe6A8Obs7OCHc5RvpnDzS0jKq0ZrykUfTM78QCJuPex9BjfB5KM?w=640',
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
