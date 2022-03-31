const axios = require('axios');

export const getDataByTicker = async (_: unknown, args: { ticker: string }) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://yh-finance.p.rapidapi.com/stock/v3/get-statistics',
            params: { symbol: args.ticker },
            headers: {
                'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
                'X-RapidAPI-Key':
                    '7a64e070a7mshe63f2557b2d7e9fp14b0aajsn1f84ed238b0d',
            },
        };

        const response = await axios.request(options);
        console.log('e', response.data.quoteType);
        const quoteType = response.data.quoteType;
        return quoteType;
    } catch (error) {
        console.log({ error });
    }
};

export default { getDataByTicker };
