
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_FGC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json(response);

        return data;
    } catch (err) {
        console.log(err);
    }
}