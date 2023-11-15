import '../css/Stats.css';
import axios from 'axios';
import { useState,useEffect } from 'react';




function Stats(){

  const API_KEY = 'RGAPI-49aabf09-15c4-4d9e-8a41-ea0bd9dc9b26'

    const [champion, setChampion] = useState([]);
    const [champData,setChampData] = useState([]);
    const [rank, setRank] = useState([]);
  
    useEffect(() => {getMyElo();}, []);
    useEffect(() => {getMyChamp();}, []);

    useEffect(() => {getChampData();},[]);
    
    
    function getMyElo(){
      const SUMMONERID ="8CrnHcAyVYDZKpnJXWWWiDcCZgBtBZfkpelz4TWU51iTpjg"
      const API_CALL = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ SUMMONERID +'?api_key=' + API_KEY;
  
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
        const API_CALL = 'https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/'+ PUID + '?api_key=' + API_KEY;
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
        <div className="leftCells">

          <div className="Cell bgCell">
            <div className="titleCell">
              <h6>Ranked Solo</h6>
            </div>
            <div className="infoCell">

              <div className="iconeCell">
                <img src="/Ranked-Emblems-Latest/Rank=Emerald.png" width={80} alt="" />
              </div>

              <div className="rankCell">
                <h4>Emerald</h4>
                <h6>20LP</h6>
              </div>

              <div className="winrate">
                <h5>22V 21V</h5>
                <h6>100%</h6>
              </div>
            </div>

          </div>

          <div className="Cell bgCell">

            <div className="titleCell">
              <h6>Ranked Flex</h6>
            </div>

            <div className="infoCell">

              <div className="iconeCell">
                <img src="/Ranked-Emblems-Latest/Rank=Diamond.png" width={80} alt="" />
              </div>

              <div className="rankCell">
                <h4>Diamond</h4>
                <h6>20LP</h6>
              </div>

              <div className="winrate">
                <h5>22V 21V</h5>
                <h6>100%</h6>
              </div>

            </div>

          </div>

          <div className="Cell bgCell">
            <div className="titleCell">
              <h5>Carriere</h5>
            </div>
            <div className="infosCellCarriere">
              <div className="firstLigne">
                <div className="timeGame">
                  <h2>1D 16H 22M</h2>
                  <h5>Temps de jeu</h5>

                </div>
                <div className="gamePlayed">
                  <h2>279</h2>
                  <h5>partie jouées</h5>
                </div>
              </div>
              <div className="secondLigne">
                <div className="donut">
                  <div className="donutHole">
                    <h2>50%</h2>
                  </div>

                </div>

              </div>
            </div>


          </div>

          
        </div>

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