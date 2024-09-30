import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  name: string | undefined;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }), 
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi