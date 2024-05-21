import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";

const Post = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const {isLoading, isError, data:post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id),
    })

    if(isLoading) return 'Loading...';
    if(isError) return `Error: ${error.message}`;
    console.log(post);
  return (
    <div>
        <button onClick={ () => navigate("/")}>back to list psots</button>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
    
  )
}

export default Post