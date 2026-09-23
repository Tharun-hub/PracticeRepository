import './index.css'
import { useEffect } from 'react';
import LeaderboardRow from '../LeaderboardRow'
async function getData()
{
    let userDetails={}; 
    try{
        userDetails = await fetch("https://apis2.ccbp.in/leaderboard-v2");
        console.log(userDetails.json())
    }
    catch(error)
    {
        console.log(error)
    }
    
}

const Leaderboard = () => {
  useEffect(()=>{
    getData();
  },[])
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
    <ul className="leaderboard-table-container">{renderLeaderboardHeader()}</ul>
  )
  
  return <div className="leaderboard-container">{renderLeaderboard()}</div>
}

export default Leaderboard
