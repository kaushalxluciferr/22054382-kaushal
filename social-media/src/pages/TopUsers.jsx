import {useEffect,useState} from "react";
import {fetchUsers,fetchPosts} from "../services/api";
const TopUsers=()=>
     {
  const [tuser,settuser]=useState([]);
  useEffect(() => 
    {
    const getTopUser=async()=>
         {
      const users=await fetchUsers();
      const userPostCounts={};

      for (const uid in users) {
        const posts=await fetchPosts(uid);
        userPostCounts[uid]=posts.length;
      }

      const sortedUsers=Object.entries(userPostCounts).sort((a,b)=>b[1]-a[1]).slice(0,5);
    settuser(sortedUsers.map(([id,count])=>({id,name:users[id],count})));
    };
getTopUser();
  },[]);
  return (
    <div className="container">
      <h2>top User</h2>
      <ul>
        {tuser.map((user)=>(
          <li key={user.id}>
            {user.name}-{user.count} posts
          </li>
        ))}</ul>
    </div>
  );
};
export default TopUsers;
