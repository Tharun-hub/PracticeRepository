import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {imageUrl, topic, title, avatarUrl, author} = blogDetails

  return (
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
  )
}

export default BlogItem
