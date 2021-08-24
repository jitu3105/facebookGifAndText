import { Avatar, Grid } from '@material-ui/core'
import React,{useState} from 'react'

const Posts = ({posts}) => {
    
    const [time,settime]=useState();
    return (
        <Grid container justifyContent='space-around' className='postBG' alignItems='center' direction="column-reverse">
            {posts.length && posts.map((post)=>{
               

            return(
            <Grid item lg={8} className='post'>
                <div className='inlineitem'>
                    <Avatar></Avatar>
                    &nbsp;&nbsp;&nbsp;{post.user}
                    </div>
                    <br/>
                    <div className='postmessage'>
                    <p>
                    {post.message}
                    </p>
                    </div>
                    <div className='postImageFrame'>
                    <img src={post.img} />
                    </div>
                    <div className='datesection'>
                        <p>
                        {Math.round(Math.floor(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60)/24)? (Math.round(Math.floor(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60)/24) ) :"" }
                        {Math.round(Math.floor(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60)/24)? " days " :"" }
                        
                        {Math.round(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60) ? Math.round(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60) :""}
                        {Math.round(Math.floor(Math.floor(Math.floor((new Date())-post.time)/1000)/60)/60) ? " hours " :""}
                        
                        {Math.round(Math.floor(Math.floor((new Date())-post.time)/1000)/60) ? Math.round(Math.floor(Math.floor((new Date())-post.time)/1000)/60) :""}
                        {Math.round(Math.floor(Math.floor((new Date())-post.time)/1000)/60) ? " minutes " :"just now"}
                        </p>

                    </div>
                </Grid>
                );
            }
            )}
        </Grid>
    )}


export default Posts
