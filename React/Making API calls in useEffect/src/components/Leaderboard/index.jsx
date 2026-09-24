import './index.css'
import { useEffect, useState } from 'react';
import LeaderboardRow from '../LeaderboardRow'
import { PacmanLoader } from "react-spinners";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getData()
  {
    let url = "https://apis2.ccbp.in/leaderboard-v2";
    let response;
    let responseData;
    try{
        response = await fetch(url);
        responseData = await response.json();
        /* console.log(responseData); */
        /* console.log(responseData.leaderboard_data.map(user=>console.log(user))) */
        let formattedData = responseData.leaderboard_data.map(each =>({
          id: each.id,
          rank: each.rank,
          name: each.name,
          profileImgUrl: each.profile_image_url,
          score: each.score,
          language: each.language,
          timeSpent: each.time_spent
        }))
        setLeaderboardData(formattedData);
        console.log(formattedData)
        setIsLoading(false);
    }
    catch(error)
    {
        console.log(error)
    }
    
  }
  useEffect(()=>{
    setTimeout(()=>{
      getData();
    },1000)
  },[])
  /* useEffect(()=>
  {
    getData();
  },[]) */
  function renderLoader(){
    /* return (<div>
      <h1>Loading</h1>
    </div>
    ); */
    return(
          <div className='loading-view-container'>
            <PacmanLoader color="#36d7b7" />
          </div> 
        )
  }
  const renderLeaderboardHeader = () => (
    <li className="leaderboard-header">
      <p className="table-heading rank">Rank</p>
      <p className="table-heading name">Name</p>
      <p className="table-heading score">Score</p>
      <p className="table-heading language">Language</p>
      <p className="table-heading time-spent">Time Spent</p>
    </li>
  )

  const renderLeaderboard = () => (
    <ul className="leaderboard-table-container">{renderLeaderboardHeader()}
    {leaderboardData.map(eachUser =>
      <LeaderboardRow key = {eachUser.id} userDetails={eachUser}/>
    )
    }</ul>
  )
  
  return <div className="leaderboard-container">{isLoading ? renderLoader() : renderLeaderboard()}</div>
}

export default Leaderboard
