import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

const Cart = createContext();
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElement([0, 2, 4, 5, 7]),
    ratings: faker.random.arrayElement([1, 2, 4, 5, 9]),
  }));
  // const [state,dispatch]=useReducer(reducer,initialState)
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>
      {children}</Cart.Provider>;
};

export default Context;
