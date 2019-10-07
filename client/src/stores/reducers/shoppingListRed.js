import { ADD_LIST } from "../actionTypes";

const DEFAULT_STATE = [
  {
    name: "Shoes",
    img: "shoe1.jpg",
    items: [
      {
        name: "Adidas UltraBoost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe1.jpg"
      },
      {
        name: "Adidas UltraBoost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe2.jpg"
      },
      {
        name: "Adidas UltraBoost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe3.jpg"
      }
    ]
  },
  {
    name: "Kitchen Stuff",
    img: "Furniture.png",
    items: [
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe1.jpg"
      },
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: ".jpg"
      },
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe3.jpg"
      },
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe3.jpg"
      },
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe3.jpg"
      }
    ]
  },
  {
    name: "Luxury",
    img: "Watches.png",
    items: [
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe1.jpg"
      },
      {
        name: "Adidas UltraBost",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe2.jpg"
      }
    ]
  }
];

// const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return Object.assign({}, state, {
        test: action.text
      });
    }
    default:
      return state;
  }
};
