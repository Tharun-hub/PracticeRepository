import UserProfile from './Components/UserProfile'

/*const userDetails = {
  imgaeUrl: 'Image_URL',
  name: 'Tharun',
  role: 'Software Developer',
}*/

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
const App = () => {
  return (
    <div className="list-container">
      <h1 className="title">User List</h1>
      {userDetailsList.map(el => {
        return <UserProfile userObj={el} key={el.uniqueNo} />
      })}
    </div>
  )
}

export default App
