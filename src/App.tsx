import cerlceLOL from '/CercleLOL.png'
import cercleLoL2 from '/2cer.png'
import arriereIcone from "/arriereIcone.png";
import cadran from '/Ranked-Emblems-Latest/Rank=Bronze.png'
import axios from 'axios'



import { useState,useEffect } from 'react'
import './App.css'

interface Summoner {
  accountId: string;
  profileIconId: number;
  revisionDate:number ;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}



function App() {



  const API_KEY = 'RGAPI-cf84eb0a-b0f3-41bc-904b-29faaeb45d84'
  const PSEUDO = 'Miligen'

  const [selectedValue, setSelectedValue] = useState("0");
  const [eloIcone, setEloIcone] = useState([])

 
  const [pseudo, setPseudo] = useState<Summoner>({
    accountId: '',
    profileIconId: 0,
    revisionDate: 0,
    name: '',
    id: '',
    puuid: '',
    summonerLevel: 0,
  });

  function handleEvent(event) {
    const value = event.target.value;
    console.log("handleEvent ", value);
    setSelectedValue(value);
  }


 
  
  

  function getMyName() {
    const API_CALL = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ PSEUDO + '?api_key=' + API_KEY;

    axios.get(API_CALL).then(function (response) {
    console.log(response.data)
    setPseudo(response.data)
  }).catch(function (error) {
    console.log(error);
  })
  }

  

  function getMyElo(){
    const SUMMONERID ="8CrnHcAyVYDZKpnJXWWWiDcCZgBtBZfkpelz4TWU51iTpjg"
    const API_CALL = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ SUMMONERID +'?api_key=' + API_KEY;

    axios.get(API_CALL).then(function (response) {
      console.log(response.data)
      setEloIcone(response.data)
    }).catch(function (error) {
    console.log(error);})

}

useEffect(() => {
  getMyName();
}, []);
useEffect(() => {
  getMyElo();
});

  return ( 
    
    <section id=''>
      <div className="presentation">
        <div className="profile">
          <img src={arriereIcone} id='test' width={320} alt=""  />
          <img src="/icone.png" width={150} id="iconeProfile" alt="" />
          <img src={"http://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/" + pseudo.profileIconId + ".png"} width={125} id='icone' alt="" />
            <div className="infoProfile">
              <div className="nomInvocateur">
                <h3>{pseudo.name}</h3>
              </div>
              <div className="lvl">
                <h6>{pseudo.summonerLevel}</h6>
              </div>
            </div>
        </div>
        

        <div className="cercles">
      
          <div className="cercle">
            <img src={cerlceLOL} width="600px" height="600px" alt="" id='groscercle'/>
          </div>
          <div className="cercle2">
            <img src={cercleLoL2} width={480} alt="" />
          </div>
          <div className="détails">
            <h1 className="nomDinvocateur">{pseudo.name.toUpperCase()}</h1>
            <h5 className='descInvocateur'>ETERNAL STUDENT</h5>
          </div>
        </div>
          <div className="rank">
              <img src={arriereIcone} width={320}alt="" />
              <select onChange={handleEvent} name="" id="selectRank">
                <option value="0"><h1>Solo / Duo</h1></option>
                <option value="1"><h1>Flex</h1></option>
              </select>

              {selectedValue === "0" ? 
              ( 
              <>
              <div className="iconeRank">
                <img src="/Ranked-Emblems-Latest/Rank=Silver.png" alt="" width={200} />
              </div>
              <div className="ranked">
                <h4>SILVER I3I</h4>
              </div>
              <div className="LPRank">
                <h5>20 - LP</h5>
             </div>
            </>)
            
               : ( 
                <>
               <div className="iconeRank">
                <img src="/Ranked-Emblems-Latest/Rank=Silver.png" alt="" width={200} />
               </div>
                <div className="ranked">
                  <h4>SILVER II</h4>
                </div>
                <div className="LPRank">
                  <h5>20 - LP</h5>
                </div>
               </>)
               }

              
              <div className="iconeRank">
                <img src="/Ranked-Emblems-Latest/Rank=Silver.png" alt="" width={200} />
              </div>
              <div className="ranked">
                <h4>SILVER II</h4>
              </div>
              <div className="LPRank">
                <h5>20 - LP</h5>
              </div>
          </div>
      </div> 
    </section>

  )
}

export default App
