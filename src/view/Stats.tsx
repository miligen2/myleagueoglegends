import '../css/Stats.css';
import axios from 'axios';
import { useState,useEffect } from 'react';




function Stats(){
    const [champion, setChampion] = useState([])
    
    useEffect(() => {getMyChamp();}, []);


    function getMyChamp(){
        const API_KEY = 'RGAPI-8c321515-6f43-41c6-a057-3f277453c4bb'
        const PUID ="lFQmKgqzZpKYM_Fy3tptjWJ8F1AVteyco_LQ20k3bluhYhMRZ9jHfIrHyYyLXXYh_RpQV8jGgAyTbw"
        const API_CALL = 'https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/'+ PUID + '?api_key=' + API_KEY;
        axios.get(API_CALL).then(function (response) {
            console.log(response.data)
            setChampion(response.data)
        }).catch(function (error) {
            console.log(error);
        })

    }
    return(
        

        

    <div className="rowStats">

    {/* {champion.map((champ) => (
        <div className="colStats" key={champ.championId}>
          <div className="cardStats">
            <div className="imgStats"></div>
            <div className="infosStats">
              <div className="nomStats">
                <h2>{champ.championId}</h2>
              </div>
              <div className="lvlStats">
                <h2>{champ.level}</h2>
              </div>
            </div>
          </div>
        </div>
      ))} */}
            
    </div>
    )
}
export default Stats;