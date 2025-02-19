import React, { useEffect, useState } from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { useSearchParams } from 'react-router-dom';
import Footer from './footer';
import './home.css';
import VodList from './vodList';
import VodStrip from './vodStrip';


export default function Home() {

    const [querys] = useSearchParams();
    const [json_ar, setAr] = useState([]);

    useEffect(() => {
        let search_query = querys.get("s");
        if (!search_query) {
            doAPI("lego"); //default
        }
        else doAPI(search_query);
    }, [querys]);

    const doAPI = async (search_query) => {
        let url = `https://www.omdbapi.com/?s=${search_query}&apikey=ff88d355`;
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        setAr(data.Search);

    }

    return (
        <React.Fragment>
            <VodStrip icon={<BiSolidMoviePlay className='movie_icon' style={{color: "white"}} />} doAPI={doAPI} />
            <VodList vod_ar={json_ar} />
            <Footer />
        </React.Fragment>
    )
}

