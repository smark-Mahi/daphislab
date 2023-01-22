import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({baseurl:'https://fakestoreapi.com/products'}),
  endpoints:(builder)=>({
    getproducts:builder.query({
      query:()=>'/products',

    })
  })
})
export const {
  useGetProductsQuery
}=apiSlice