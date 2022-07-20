import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"

import Ip from '../CommonIp';

function Post() {

    let [post, setPost] = useState([]);
    // let [currentPage,setCurrentPage] = useState(1)
    // let [postsPage,setPostsPage] = useState(Post/10)



    useEffect(() => {
        const fetchData = () => {
            const post = axios.get(
                Ip+'/manual/'
            ).then((response) => {
                // console.log(response);
            });
            setPost(post.data);
        }
        fetchData()
    },[]);

    console.log(Post)
    return (
        <>
            
        </>
    )
}

export default Post