import React,{useState} from 'react'
import PostAdder from '../Components/PostAdder'
import Posts from '../Components/Posts';

const Home = () => {
    const [posts,setPosts]=useState([]);
    return (
        <div className='maindiv'>
            <PostAdder setPosts={setPosts} posts={posts}/>
            <Posts posts={posts}/>
        </div>
    )
}

export default Home
