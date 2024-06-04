// import DeleteBtn from "../public/DeleteBtn";
import { useParams, useLocation} from 'react-router-dom';


function BlogPage(props){
    const {id} = useParams();
    const { state: blogs} = useLocation();
    const data = blogs.find(x => x.id === id);;

    return(
        <div className="blog-container">
            <h1>{data.title}</h1>
            <h3>Written By {data.author}</h3>
            <p>{data.body}</p>
            {/* <DeleteBtn id={id} blogs={blogs}/> */}
        </div>
    )
}

export default BlogPage;