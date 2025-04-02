import React,{useEffect,useState} from "react";
import {fetchUsers,fetchPosts} from "../services/api";
const Feed=()=>
    {
const [posts,setposts]=useState([]);
useEffect(()=>
    {
    const getFeed=async()=>
        {
      const users=await fetchUsers();
      let alpost=[];
      for(const userId in users)
        {
        const usrposts=await fetchPosts(userId);
        alpost=[...alpost, ...usrposts];
}
      alpost.sort((a,b)=>b.id-a.id);
      setposts(alpost);    };
    getFeed();
    const interval=setInterval(getFeed, 5000);
    return ()=>clearInterval(interval);
},[]);

  return (
    <div className="container">
      <h2>live feeed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.content}</strong>
          </li>
        ))}</ul>
    </div>
  );
};
export default Feed;
