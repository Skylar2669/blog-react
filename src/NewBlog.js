import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import blogs from "./data/db.json";

function NewBlog(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('yaoying');

    const navigate = useNavigate();

    function sendBlog(e){
        e.preventDefault();
        const newBlog = {title: title, author: author, body: content, id: (blogs.blogs.length+1)}
        blogs.blogs.push(newBlog);
        navigate('/');
    }
    
    return (
        <div className="newBlog-container">
            <h1>Create a New Blog Here!</h1>
            <form onSubmit={(e) => sendBlog(e)}>
                <label>Blog Title:</label>
                <input type="text" 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    />

                <label>Author:</label>
                <select 
                    name="authors" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="yaoying">Yaoying</option>
                    <option value="🐒">🐒</option>
                </select>
                    
                <label>Content:</label>
                <textarea 
                    rows="10" cols="50" 
                    required 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
            
        </div>
        
    )
}

export default NewBlog;