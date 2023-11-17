import '../css/Stats.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

interface MiniSeriesDTO{
  losses: number;
  progress: string;
  target: number;
  wind: number;
}

interface Stat{
  summonerId: string;
  summonerName:string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: Boolean;
  veteran: Boolean;
  freshBlood: Boolean;
  inactive: Boolean;
  miniSeries: MiniSeriesDTO;
}

function Stats(){


    const [champion, setChampion] = useState([]);
    const [champData,setChampData] = useState([]);
    const [rank, setRank] = useState([]);
/*const [rank, setRank] = useState<Stat>({
  summonerId: '',
  summonerName: '',
  queueType: '',
  tier: '',
  rank: '',
  leaguePoints: 0,
  wins: 0,
  losses: 0,
  hotStreak: false,
  veteran: false,
  freshBlood: false,
  inactive: false,
  miniSeries: { losses: 0, progress: '', target: 0, wind: 0 }
});*/
  
    useEffect(() => {getMyElo();}, []);
    useEffect(() => {getMyChamp();}, []);

    useEffect(() => {getChampData();},[]);
    
    
    function getMyElo(){
      const SUMMONERID ="8CrnHcAyVYDZKpnJXWWWiDcCZgBtBZfkpelz4TWU51iTpjg"
      const API_CALL = '/api/lol/league/v4/entries/by-summoner/'+ SUMMONERID ;
  
      axios.get(API_CALL).then(function (response) {
        console.log(response.data)
        setRank(response.data)
      }).catch(function (error) {
      console.log(error);})
    
  }
  
  let imgscr
  switch (rank.tier) {
    case "IRON":
      imgscr = <img src="/Ranked-Emblems-Latest/Rank=Iron.png" alt="" width={200} />
      break;
    case "BRONZE":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Bronze.png" alt="" width={200} />
      break;
    case "SILVER":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Silver.png" alt="" width={200} />
      break;
    case "GOLD":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Gold.png" alt="" width={200} />
      break;
    case "PLATINUM":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Platinum.png" alt="" width={200} />
      break;
    case "DIAMOND":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Diamond.png" alt="" width={200} />
      break;
    case "MASTER":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Master.png" alt="" width={200} />
      break;
    case "GRANDMASTER":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Grandmaster.png" alt="" width={200} />
      break;
    case "CHALLENGER":
      imgscr =  <img src="/Ranked-Emblems-Latest/Rank=Challenger.png" alt="" width={200} />
      break;
    default:
      imgscr =  <img src="/load01.gif" alt="" width={200} />
      break;
  }
  

    function getMyChamp(){
 
        const PUID ="lFQmKgqzZpKYM_Fy3tptjWJ8F1AVteyco_LQ20k3bluhYhMRZ9jHfIrHyYyLXXYh_RpQV8jGgAyTbw"
        const API_CALL = '/api/lol/champion-mastery/v4/champion-masteries/by-puuid/'+ PUID ;
        axios.get(API_CALL).then(function (response) {
            console.log(response)
            setChampion(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    function getChampData(){
      axios.get('http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json').then(function (response) {
        console.log(response)
        setChampData(response.data)
 
      }).catch(function (error) {
        console.log(error);
      })
    }

    return(

    
      <div className="container">

        <div className="rightCells">
          <div className="cards">
            {champion.map((item, index) => (
            <div className="cardPerso" key={index}>
            
              <div className="imgPerso">
                <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_1.jpg"} id='perso' width="200px" alt="" />
                <img src="/mastery-7.png" id='masteries'width="30%" alt="" />
              </div>
              <div className="nomPerso">
                <h6>Master YI {item.championId} </h6>
                <hr style={{ width: '25%' }} />
              </div>
              <div className="masteriesPoint">
                <div className="icone">
                  <img src="/silver.png" id="iconemasterie" alt="" />
                </div>
                <div className="points"><p>{item.championPoints} points</p></div>
                
              </div>

            </div>))}

          </div>


        </div>


      </div>
      
      

        

        

   
    )
}
export default Stats;