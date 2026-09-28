import './index.css'
import {Link} from 'react-router'
const BlogItem = props => {
  const {blogDetails} = props
  const {uniqueId, imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
    <Link to={`/blogs/${uniqueId}`} className='blog-list-item-link'> 
    <li className="blog-list-item">
      <img className="thumbnail" src={imageUrl} alt={title} />
      <div className="details-container">
        <p className="topic">{topic}</p>
        <p className="blog-item-title">{title}</p>
        <div className="author-details-container">
          <img className="avatar" src={avatarUrl} alt={author} />
          <p className="name">{author}</p>
        </div>
      </div>
    </li>
    </Link>
  )
}

export default BlogItem
