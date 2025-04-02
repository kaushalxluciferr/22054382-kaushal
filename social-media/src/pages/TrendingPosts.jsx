import {useEffect,useState} from "react";
import {fetchUsers,fetchPosts,fetchComments} from "../services/api";

const TrendingPosts=()=>
    {
  const [tndpost,settndpost]=useState([]);
  useEffect(()=>
    {
    const fetchtrndpost=async()=>{
      const users=await fetchUsers();
      let postcmnt = [];
      for (const userId in users)
        {
        const posts=await fetchPosts(userId);
        for(const post of posts) 
            {
          const cmnt=await fetchComments(post.id);
          postcmnt.push({...post,commentCount:cmnt.length });
        }
      }
      const maxComments=Math.max(...postcmnt.map((p)=>p.commentCount),0);
      const topPosts=postcmnt.filter((p)=>p.commentCount===maxComments);
      settndpost(topPosts);
    };
    fetchtrndpost();
  }, []);
  return (
    <div className="container">
      <h2>Viral/Trending posts</h2>
      <ul>
        {tndpost.map((post) => (
          <li key={post.id}>
            <strong>{post.content}</strong>-{post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
