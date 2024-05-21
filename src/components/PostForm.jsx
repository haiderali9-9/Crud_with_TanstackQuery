import { useState } from "react"


const PostForm = ({ onSubmit, initailValue }) => {
    const [post, setPost] = useState({
        title: initailValue?.title || "",
        body: initailValue?.body || ""
    })

    
    const handeleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const renderField = (label) => {
        return(
        <div>
            <label>{label}</label>
            <input onChange={handeleChangeInput} type='text' name={label.toLowerCase()} value={post[label.toLowerCase()]}/>
        </div>)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        setPost({
            title:"",
            body: ""
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        {renderField('Title')}
        {renderField('Body')}
        <button type="submit">submit</button>
    </form>
  )
}

export default PostForm