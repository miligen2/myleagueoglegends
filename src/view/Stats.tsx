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

      <>
      <div className="container">
        <div className="leftCells">

          <div className="Cell">
            <div className="titleCell">
              <h6>Ranked Solo</h6>
            </div>
            <div className="infoCell">

              <div className="iconeCell">
                <img src="/Ranked-Emblems-Latest/Rank=Emerald.png" width={150} alt="" />
              </div>

              <div className="rankCell">
                <h4>Emerald</h4>
                <h5>20LP</h5>
              </div>

              <div className="winrate">
                <h5>22V 21V</h5>
                <h6>100%</h6>
              </div>
            </div>

          </div>

          <div className="Cell">

            <div className="titleCell">
              <h6>Ranked Flex</h6>
            </div>

            <div className="infoCell">

              <div className="iconeCell">
                <img src="/Ranked-Emblems-Latest/Rank=Diamond.png" width={150} alt="" />
              </div>

              <div className="rankCell">
                <h4>Diamond</h4>
                <h5>20LP</h5>
              </div>

              <div className="winrate">
                <h5>22V 21V</h5>
                <h6>100%</h6>
              </div>

            </div>

          </div>
          
        </div>
      </div>
      
      
      </>
        

        

   
    )
}
export default Stats;