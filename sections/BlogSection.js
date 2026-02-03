import React from "react"
import { TitleSm } from "@/components/common/Title"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"
import { blogs as blogsData } from "@/assets/data/dummydata"

const BlogSection = () => {
    const sortedBlogs = [...blogsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const recentBlogs = sortedBlogs.slice(0, 4)
  
    return (
      <div className='container blog-card grid-2 py'>
        {recentBlogs.map((blog) => (
          <div className='card' key={blog._id}>
          <div className='card-img'>
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className='card-details'>
          <span> {blog.category} </span> 
            <Link href={`blogs/${blog._id}`} className='title-link'>
              <TitleSm title={blog.title} />
            </Link>
            <div className='flex'>
            {blog.createdAt&& <span>  {new Date(blog.createdAt).toLocaleDateString(
              'en-US', 
              {
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
              }
            )}</span>}
            </div>
  
          </div>
        </div>
        ))}
        <div className='card links'>
            <Link href='/blogs'>
              SEE MORE <HiOutlineArrowRight className='link-icon' />
            </Link>
        </div>
    </div>
      
    );
  };


export default BlogSection