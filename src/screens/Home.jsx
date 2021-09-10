import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import SelectForm from "./SelectForm";
import Detail from "./Detail"
import ApiChild from "./ApiChild";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import "../css/home.css";

const Home = () => {


    const [coins, setCoins] = useState([]);
    const [choose, setChoose] = useState("Bitcoin");
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => {
                setCoins(res.data)
                // apidata = res.data;
                // console.log(apidata)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    const handleSelect = (event) => {
        setChoose(event.target.value)
    }
    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value)

    }
    const filterCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())

    )

    useEffect(() => {
        document.title = coins.map(list => list.symbol)

    })


    return (
        <div>
            <div>
                <FormControl>
                    <InputLabel>Coins</InputLabel>
                    <Select variant="outlined" label="Coins" value={choose} onChange={handleSelect} >
                        {coins.map((coinlist) => {
                            return (
                                <MenuItem key={coinlist.id} value={coinlist.name}>{coinlist.name} </MenuItem>
                            )


                        })}

                    </Select>
                </FormControl>
            </div>



            <div style={{ display: "flex", alignContent: "center" }}><h1 style={{ justifyContent: "center", color: "red" }}>Om</h1></div>


            <div>
                <TextField id="inputField" type="text" label="Search" variant="filled" onChange={handleSearch}></TextField >
            </div>

            {filterCoins.map((coin) => {
                return (
                    <div key={coin.name} style={{ display: 'flex', backgroundColor: "blue", border: "1px solid black", justifyContent: "space-around" }}>
                        | <ApiChild name={coin.name} image={coin.image} />
                        | <Detail symbol={coin.symbol} />|
                    </div>
                )

            })}


        </div>
    )
}

export default Home
