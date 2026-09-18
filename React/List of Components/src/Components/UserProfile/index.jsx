import './index.css'
const UserProfile = props => {
  //we can also destructure props using ({userObj})
  let {userObj} = props
  let {imageUrl, name, role} = userObj
  return (
    <div className="user-card-container">
      <img className="avatar" src={imageUrl} alt="image" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
