
import PostForm from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from '../api/posts';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { updatePost } from "../api/posts"

const EditPost = () => {
   
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {id} = useParams();
    
    const {isLoading, isError, data:post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id)
    })
        
    const updatePostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']});
            navigate("/")
        }
    })


    if(isLoading) return 'Loading...';
    if(isError) return `Error: ${error.message}`;
   

    const handleSubmit = (updatedPost) => {
        console.log(updatedPost);
        updatePostMutation.mutate({id,...updatePost})
    }
  return (
    <>
    <h1>hade</h1>
    <PostForm  onSubmit={handleSubmit} initailValue={post} />
  
    </>
  )
}

export default EditPost