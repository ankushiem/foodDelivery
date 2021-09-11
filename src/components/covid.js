import React from 'react';
import { useEffect , useState } from 'react';

const Covid = () => {
    const [data,setData] = useState([]);
const getCovidData = async () => {
    try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise[0]);
    } catch(err){
        console.log(err);
    }
    
}

    useEffect(() => {
        getCovidData();
    },[]);
    return (
        <div>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <p>our countrty india</p>
            <p>total active {data.active}</p>
            <p>Total confirmed {data.confirmed}</p>
            <p>Total deaths {data.deaths}</p>
            <p>Total deltaconfirmed {data.deltaconfirmed}</p>
            <p>Total deltadeaths {data.deltadeaths}</p>
            <p>Total deltarecovered {data.deltarecovered}</p>
            <p>Total lastupdatedtime {data.lastupdatedtime}</p>
            <p>Total migratedother {data.migratedother}</p>
            <p>Total recovered {data.recovered}</p>
            <button onClick={() => getCovidData()}>
                update
            </button>
            
        </div>
    )
}

export default Covid