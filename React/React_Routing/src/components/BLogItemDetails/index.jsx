import { useEffect, useState } from 'react';
import './index.css'
import { useParams } from 'react-router';

/* const blogData = {
  title: 'Blog Name',
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
  avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
  author: 'Author Name',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
} */

const BlogItemDetails = () => {
  const [blogItemDetails, setBlogItemsDetails] = useState({});
  const {id} = useParams();
  console.log(id);
  let apiUrl = `https://apis.ccbp.in/blogs/${id}`
  
    async function getBlogItemDetails()
    {
        let response = await fetch(apiUrl);
        const responseData = await response.json();
        console.log(responseData,  "response");
        let formattedData = {
          title: responseData.title,
          imageUrl: responseData.image_url,
          content: responseData.content,
          avatarUrl: responseData.avatar_url,
          author: responseData.author
        };
        setBlogItemsDetails(formattedData);
    }
    
    useEffect(()=>{
        getBlogItemDetails();
        console.log(blogItemDetails, "Blog details");
    },[])
  
  const renderBlogItemDetails = () => {
    const {title, imageUrl, content, avatarUrl, author} = blogItemDetails

    return (
      <div className="blog-item-details-container">
        <h1 className="title">{title}</h1>
        <div className="author-details-container">
          <img className="avatar" src={avatarUrl} alt={author} />
          <span className="name">{author}</span>
        </div>
        <img className="blog-img" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  return <div className="blog-details-container">{renderBlogItemDetails()}</div>
}

export default BlogItemDetails
