import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';

function Browse(props) {
    const { platform } = useParams();

    const dispatch = useDispatch();
    const netflixOriginals = useSelector(netflixOriginalsSelector);
    // const {results} = netflixxOriginals.data; - either destructure the

    const nfresults = netflixOriginals.data?.results;

    const randomIndex = Math.floor(Math.random()* nfresults?.length);
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
    }, [])

    return (
        <div className='py-5'>
            {
            nfresults ?
            <Header item={nfresults[randomIndex]} platform={platform}/>: "no data"
            }
        </div>
    );
}

export default Browse;