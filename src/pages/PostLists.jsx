import AddPost from "../components/AddPost"
import {fetchPosts} from "../api/posts"
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { useNavigate } from "react-router-dom"
import { deletePost } from "../api/posts"

const PostLists = () => {
    const navigate = useNavigate();
    const {isLoading, isError, data:posts, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
    const queryClient = useQueryClient();

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']});
            console.log("success");
        }
    })
   const handleDelete = (id)=> {
    deletePostMutation.mutate(id);
   }
    if(isLoading) return 'Loading...';
    if(isError) return `Error: ${error.message}`;

  return (
    <div>
        <AddPost/>
         {posts.map(post => (
            <div key={post.id} style={{background: "#777"}}>
                <h4 style={{cursor:"pointer"}} onClick={()=> navigate(`/posts/${post.id}`)}>{post.title}</h4>
                <button onClick={()=> navigate(`/posts/${post.id}/edit`)} >Edit</button>
                <button onClick={()=>handleDelete(post.id)}>Delete</button>
            </div>
         ))}
    </div>
  )
}

export default PostLists