import { Avatar, TextField, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GifIcon from '@material-ui/icons/Gif'
import React,{useEffect} from 'react'

const PostForm = ({setToddleAdder,setToddleGif,pdata,setPdata,setPosts,posts}) => {
    const handlechange=(e)=>{
        setPdata({...pdata,message:e.target.value})
    }
    const handleCancel=()=>{
        setPdata({
            time:"",
            user:'testuser',
            message:"",
            img:''
        });
        setToddleAdder(false);
    }
    const handleSubmit=()=>{
        pdata.time=new Date();
    
        setPosts([...posts,pdata]);
        setPdata({
            time:"",
            user:'testuser',
            message:"",
            img:''
        });
        setToddleAdder(false);
    }
    return (
        
        <div className='postform'>
            <div className='inline'>
                <Avatar onClick={handleCancel}>
                    <ArrowBackIcon/>
                </Avatar>
                <h2 className='gifheading'>
                    CREATE POST
                </h2>
            </div>
            
            <div className="contentcontainer">
            <TextField variant='standard' value={pdata.message} onChange={handlechange} placeholder="What's on your Mind?" maxRows={5} multiline/>
            {
                pdata.img && (<img src={pdata.img}/>)
            }
            </div>
            <Typography className='btnGif inline btnonForm' variant='h7' onClick={()=>{setToddleGif(true)}}>
                <GifIcon fontSize='large' />
                add a gif
            </Typography>
            <Typography className='btnGif inline submitbtnonForm' variant='h7' onClick={handleSubmit}>        
                POST
            </Typography>
        </div>
    )
}

export default PostForm
