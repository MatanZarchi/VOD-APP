import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './moreInfo.css';

export default function MoreInfo() {

    const nav = useNavigate();

    const params = useParams();
    const [dataAr, setData] = useState([]);

        useEffect(() => {
            infoAPI();
        }, []);

    const infoAPI = async () => {
        let url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=ff88d355`;
        let resp = await axios.get(url);
        console.log(resp.data);
        setData(resp.data);
    }

    return (
        <div className='outer'>
            <div className='info'>
                <button onClick={()=>{nav(-1)}} className='backBtn'>Back</button>
                <img style={{ height: '170px' }} src={dataAr.Poster} />
                <br></br>
                <br></br>
                <h3>Title: <span style={{ color: '#ff6347' }}>{dataAr.Title}</span></h3>
                <div>Released: <span style={{ color: '#ff6347' }}>{dataAr.Released}</span></div>
                <div>Runtime: <span style={{ color: '#ff6347' }}>{dataAr.Runtime}</span></div>
                <div>Language: <span style={{ color: '#ff6347' }}>{dataAr.Language}</span></div>
                <div>Director: <span style={{ color: '#ff6347' }}>{dataAr.Director}</span></div>
                <div>Genre: <span style={{ color: '#ff6347' }}>{dataAr.Genre}</span></div>
                <div>Writer: <span style={{ color: '#ff6347' }}>{dataAr.Writer}</span></div>
                <div>Actors: <span style={{ color: '#ff6347' }}>{dataAr.Actors}</span></div>
                <div>Awards: <span style={{ color: '#ff6347' }}>{dataAr.Awards}</span></div>
                <div>Plot: <span style={{ color: '#ff6347' }}>{dataAr.Plot}</span></div>
            </div>
        </div>
    )
}
