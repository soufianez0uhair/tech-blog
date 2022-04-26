import {useContext, useEffect} from 'react'
import Blog from '../components/Blog'
import {BlogsContext} from '../Helper/Context'

export default function Home() {
    const {blogs} = useContext(BlogsContext)
    useEffect(() => {
        localStorage.setItem('myBlogs', JSON.stringify(blogs))
    }, [blogs])
    const blogEl = blogs.map(blog => {
        return (
            <Blog key={blog.id} title={blog.title} author={blog.author} img={blog.img} overview={blog.overview} />
        )
    })
    return (
        <div className="blogs">
           {blogEl}
        </div>
    )
}