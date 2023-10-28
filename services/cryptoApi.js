import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query'



const cryptoApiHeaders = {
    'X-RapidAPI-Key': '1b3071bf3dmsh29d161991466882p105c04jsn4675e1cf5c17',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;

