import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Avatar, TextField, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PermDataSetting } from '@material-ui/icons';

const Gifs = ({setToddleGif,setPdata,pdata, setToddleAdder}) => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    useEffect(() => {
        const fetchdata = async () => {
            setData('')
            const results = await axios('https://api.giphy.com/v1/gifs/trending', {
                params: {
                    api_key: 't9ShWYo5VGcCUgikulPq3aueyW5ZFLev',

                }
            })
           
            setData(results.data.data)
        }
        fetchdata();
    }, [])
    
    const handleClick=(url)=>{
        setPdata({...pdata,img:url})
    
        setToddleGif(false);
        setToddleAdder(true);
    }
    const handlechange= async (e)=>{
        setSearch(e.target.value);
        const results = await axios('https://api.giphy.com/v1/gifs/search', {
                params: {
                    api_key: 't9ShWYo5VGcCUgikulPq3aueyW5ZFLev',
                    q:e.target.value,
                }
            })
           
            setData(results.data.data)
    }
    return (
        <div className='searchgifcontainer'>
        <div className='inline'>
            <Avatar onClick={()=>{setToddleGif(false)}}>
                <ArrowBackIcon/>
            </Avatar>
            <h2 className='gifheading'>
                Choose a GIF
            </h2>
        </div>

        <div className='searchGif inline'>
            <SearchIcon fontSize='large' />
            <input type='text' className='searchicon' value={search} onChange={handlechange}/>
        </div>
        <div className='selectGif'>
            
            {data.length ?
            (
                data.map((dta)=>(
                    <div key={dta.id}>
                    <img src={dta.images.fixed_height.url} onClick={()=>{handleClick(dta.images.fixed_height.url)}}/>
                    </div>
                ))
            ):(
                <CircularProgress/>
            )}
        </div>
        </div>
    )
}

export default Gifs
