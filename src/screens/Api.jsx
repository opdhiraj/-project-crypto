import React, { useEffect, useState } from 'react'
import axios from "axios";


const Api = () => {
    const [coins, setCoins] = useState([])


    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((res) => {
                setCoins(res.data)
                // apidata = res.data;
                // console.log(apidata)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);



    return (
        <div>
            {coins.map(coin =>
                <div key={coin.id} style={{ display: 'flex', border: "1px solid black", justifyContent: "space-evenly" }}>
                    <img src={coin.image} alt="coinImage" height="30px" />|
                    |<li>{coin.name}</li>|
                    | <li>{coin.current_price}</li>

                </div>

            )}


        </div>
    )

}
export default Api
