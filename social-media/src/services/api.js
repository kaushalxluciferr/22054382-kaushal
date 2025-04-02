import axios from "axios";

const BASE_URL="http://20.244.56.144/evaluation-service";
export const fetchUsers=async()=>
     {
  try{
    const response=awaitaxios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch(error) 
  {
    console.error("Error fetching users:", error);
    return {

    };
  }
};

export const fetchPosts=async(userId)=>
     {
  try{
    const response=await axios.get(`${BASE_URL}/users/${userId}/posts`);
    return response.data.posts;
  } catch(error) 
  {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchComments=async(postId)=>
    {
  try {
    const response=await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data.comments;
  }catch(error) 
  {
    console.error("Error fetching comments:", error);
    return [];
  }
};
