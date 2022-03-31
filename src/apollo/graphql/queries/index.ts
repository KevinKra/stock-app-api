const axios = require('axios');

export const getDataByTicker = async (_: unknown, args: { ticker: string }) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-statistics',
            params: { symbol: args.ticker },
            headers: {
                'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
                'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            },
        };

        const response = await axios.request(options);
        const quoteType = response.data.quoteType;
        const price = response.data.price;
        const data = { ...quoteType, ...price };
        // console.log('data', data);
        return data;
    } catch (error) {
        console.log({ error });
    }
};

export default { getDataByTicker };
