import {useState, useEffect} from 'react'
import {BeatLoader} from 'react-spinners'

import BlogItem from '../BlogItem'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/blogs'

const Home = () => {
  const [blogsData, setBlogsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(apiUrl)
      const fetchedData = await response.json()
      const formattedData = fetchedData.map(eachBlog => ({
        uniqueId: eachBlog.id,
        title: eachBlog.title,
        imageUrl: eachBlog.image_url,
        avatarUrl: eachBlog.avatar_url,
        author: eachBlog.author,
        topic: eachBlog.topic,
      }))

      setBlogsData(formattedData)
      setIsLoading(false)
    }

    getBlogs()
  }, [])

  const renderBlogsData = () => {
    return (
      <ul className="blogs-list">
        {blogsData.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.uniqueId} />
        ))}
      </ul>
    )
  }

  const renderLoader = () => (
    <div className="loading-view-container">
      <BeatLoader />
    </div>
  )

  return <>{isLoading ? renderLoader() : renderBlogsData()}</>
}

export default Home
