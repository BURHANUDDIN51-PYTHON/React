import {useState, useEffect} from 'react';


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    let url = `https://v6.exchangerate-api.com/v6/855a7abf2dfe9780b570130f/latest/${currency}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res.conversion_rates))
    },[currency]);

    return data;
}       

export default useCurrencyInfo