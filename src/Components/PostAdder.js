import { Avatar, Button, Card, Grid, TextField, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import GifIcon from '@material-ui/icons/Gif'
import './PostAdder.css'
import Gifs from './Gifs'
import PostForm from './PostForm'

const PostAdder = ({setPosts,posts}) => {
    const [toddleGif,setToddleGif]=useState(false);
    const [toddleAdder,setToddleAdder]=useState(false);
    const [pdata,setPdata]=useState({
        time:'',
        user:'testuser',
        message:"",
        img:''
    });
    
    return (
        <Grid container justifyContent='space-around' className='postAdderBG'>
            <Grid item className='postAddercontroller'>
                <div className='postAdder'>
                    <div className='inline'>
                    <Avatar className='avatar' ></Avatar>
                    <Typography className='btnPostAdder'onClick={()=>{setToddleAdder(true)}} variant='h7'>what's on your mind ?</Typography>
                    </div>
                    <hr className='lightLine'/>
                <Typography className='btnGif inline' variant='h7' onClick={()=>{setToddleGif(true)}}>
                    <GifIcon fontSize='large' />
                    add a gif
                </Typography>
                </div>
            </Grid>
            
            {toddleAdder && (
                <div className='postAdderPopupContainer'>
                    <PostForm setToddleAdder={setToddleAdder} setToddleGif={setToddleGif} setPosts={setPosts} posts={posts} setPdata={setPdata} pdata={pdata}/>
                </div>
            )}
            {toddleGif && (
                <div className='postAdderPopupContainer'>
                    <Gifs setToddleAdder={setToddleAdder} setToddleGif={setToddleGif} setPdata={setPdata} pdata={pdata} />
                </div>
            )}

        </Grid>
    )
}

export default PostAdder
