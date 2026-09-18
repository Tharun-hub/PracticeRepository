import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, commentText} = commentDetails

  const initial = name ? name[0].toUpperCase() : ''

  return (
    <div>
      <li className="list-item">
        <div className="intial-and-comment-container">
          <p className="initial">{initial}</p>
          <div className="name-and-comment-container">
            <p className="name-text">{name}</p>
            <p className="comment-text">{commentText}</p>
          </div>
        </div>
      </li>
      <hr className="horizontal-line" />
    </div>
  )
}

export default CommentItem
