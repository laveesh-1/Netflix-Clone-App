import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchPopularTv, netflixOriginalsSelector, popularTvSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { platform } from '../helper/requests';

function Homescreen(props) {

    const dispatch = useDispatch();
    const netflixOriginals = useSelector(netflixOriginalsSelector);
    const nfresults = netflixOriginals.data?.results;
    //another method- const { results } = netflixOriginals.data; either destruture the property or assign it to a avriable like the previous line
    //console.log(nfresults);

    const randomIndex = Math.floor(Math.random() * nfresults?.length);

    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, []);

    return (
        <>
            {
            nfresults ?
            <Header item={nfresults[randomIndex]} platform={platform.tv}/>: "no data"
            }

            <div className='container-fluid'>
                <Row title="Popular Shows" action={fetchPopularTv} selector={popularTvSelector} platform={platform.tv} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={netflixOriginalsSelector} platform={platform.tv} />
            </div>
        </>
    );
}

export default Homescreen;