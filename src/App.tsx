import cerlceLOL from '/CercleLOL.png'
import cercleLoL2 from '/2cer.png'
import arriereIcone from "/arriereIcone.png";
import Header from "./compenent/header/Header";
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

interface RankData {
  tier: string;
  rank: string;
  leaguePoints: number;
}



function App() {



  const [selectedValue, setSelectedValue] = useState("0");
  const [eloIcone, setEloIcone] = useState<RankData[]>([]);
  const [inputValue, setInputValue] = useState('');


  const [pseudo, setPseudo] = useState<Summoner>({
    accountId: '',
    profileIconId: 0,
    revisionDate: 0,
    name: '',
    id: '',
    puuid: '',
    summonerLevel: 0,
  });

  function onChangeEvent(event) {
    const value = event.target.value;
    setInputValue(value);
  }
  function onClickHandler() {

    getMyName(inputValue);

  }
  function handleEvent(event) {
    const value = event.target.value;
    console.log("handleEvent ", value);
    setSelectedValue(value);
  }

  function getMyName(searchTerm: string) {

    const API_CALL = '/api/lol/summoner/v4/summoners/by-name/' + searchTerm ;

    axios.get(API_CALL).then(function (response) {
    console.log(response.data)
    setPseudo(response.data)
  }).catch(function (error) {
    console.log(error);
  })
  }

  

  function getMyElo(){
    const API_CALL = '/api/lol/league/v4/entries/by-summoner/'+ pseudo.id;

    axios.get(API_CALL).then(function (response) {
      console.log(response.data)
      setEloIcone(response.data)
    }).catch(function (error) {
    console.log(error);})

}



useEffect(() => {
  if (pseudo.id) {
    getMyElo();
  }
}, [pseudo.id]);
 

function RankDisplay({tier, rank, leaguePoints}:RankData) {
  return (
    <>
              <div className="iconeRank">
                <img src={`/Ranked-Emblems-Latest/Rank=${tier}.png`} alt="" width={200} />
              </div>
              <div className="ranked">
                <h4>{tier.toUpperCase()} {rank} </h4>
              </div>
              <div className="LPRank">
                <h5>{leaguePoints} - LP</h5>
             </div>
    </>
  );


}

  return ( 
    <> <Header inputValue={pseudo.name} />
    <section id=''>
      <div className="recherche">
        <input type="search" name="" onChange={onChangeEvent} id="" placeholder='Summoner names' />
        <button onClick={onClickHandler}>Send</button>
      </div>
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

              {selectedValue === "0" && eloIcone.length > 0 ? (
                <RankDisplay tier={eloIcone[0].tier} rank={eloIcone[0].rank} leaguePoints={eloIcone[0].leaguePoints}/>) 
                : selectedValue === "1" && eloIcone.length > 1 ? (
                <RankDisplay tier={eloIcone[1].tier} rank={eloIcone[1].rank} leaguePoints={eloIcone[1].leaguePoints}/>) : null}
          </div>
      </div> 
    </section>
    </>
  )
}

export default App
