import { ADD_LIST } from "../actionTypes";

const DEFAULT_STATE = [
  {
    name: "Shoes",
    img: "ShoeCover.jpg",
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
        name: "Puma Predator",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "shoe3.jpg"
      }
    ]
  },
  {
    name: "Furniture",
    img: "Furniture.png",
    items: [
      {
        name: "Blue Sofa",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "Furniture1.jpg"
      },
      {
        name: "Gray Sofa",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "Furniture2.jpg"
      },
      {
        name: "Wardrobe",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "Furniture3.jpg"
      },
      {
        name: "Coffee Table",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "Furniture4.jpg"
      },
      {
        name: "Arm Chair",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "Furniture5.jpg"
      }
    ]
  },
  {
    name: "Luxury",
    img: "Watches.png",
    items: [
      {
        name: "Timex Weekender",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "watches1.jpg"
      },
      {
        name: "Tissot",
        link:
          "https://www.amazon.ca/adidas-Performance-Ultra-Boost-Running/dp/B00ZWUITRO?th=1",
        oldPrice: "90",
        newPrice: "45",
        img: "watches2.jpg"
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
