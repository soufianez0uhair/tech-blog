import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import {BlogsContext} from '../Helper/Context'

export default function AddBlog() {
    const navigate = useNavigate()
    const {blogs, setBlogs} = useContext(BlogsContext)
    const [id, setId] = useState(blogs[blogs.length - 1].id + 1)
    const [blog, setBlog] = useState({
        'id': id,
        title: '',
        author: '',
        overview: '',
        img: ''
    })
    function handleChange(e) {
        const {name, value} = e.target;
        setBlog(prevBlog => {
            return {
                ...prevBlog,
                [name]: value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        setBlogs(prevBlogs => {
            return [
                ...prevBlogs,
                blog
            ]
        })
        setId(id + 1)
        navigate('tech-blog')
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <div className="input-box">
                <label htmlFor="title">Blog's title:</label>
                <input type="text" onChange={(e) => handleChange(e)} id="title" name="title" />
            </div>
            <div className="input-box">
                <label htmlFor="author">Blog's author:</label>
                <input type="text" onChange={(e) => handleChange(e)} id="author" name="author" />
            </div>
            <div className="input-box">
                <label htmlFor="overview">Blog's overview:</label>
                <input type="text" onChange={(e) => handleChange(e)} id="overview" name="overview" />
            </div>
            <div className="input-box">
                <label htmlFor="img">Blog's img:</label>
                <input type="text" onChange={(e) => handleChange(e)} id="img" name="img" />
            </div>
            <div className="btn-box">
                <button className="btn--add-blog">
                Add Blog
                </button>
            </div>
        </form>
    )
}