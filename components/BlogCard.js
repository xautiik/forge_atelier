import React from "react"
import Link from "next/link"
import { TitleSm } from "./common/Title"
import { blogs as blogsData } from "@/assets/data/dummydata"

const BlogCard = () => {
  const blogs = [...blogsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

  return (
    <div className='container blog-card grid-2 py'>
      {blogs.map((blog) => (
        <div className='card' key={blog._id}>
        <div className='card-img'>
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className='card-details'>
        <span> {blog.category}</span>
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
    </div>
  );
};

export default BlogCard;
