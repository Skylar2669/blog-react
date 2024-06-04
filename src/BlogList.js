import {Link} from "react-router-dom"

function BlogList({blogs, handleDelte}){
    return(
        <div className="bloglist-container">
            {blogs.map((blog) =>
                (<div className="bloglist" key={blog.id}>
                     <Link to={'/blogs/' + blog.id} state={blogs}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                    </Link>
                        <button onClick={() => handleDelte(blog.id)}>Delete Blog</button>
                    
                </div>)
            )}
        </div>  
    );
}

export default BlogList;