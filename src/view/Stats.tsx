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
          <div className="cell2">
            <div className="type">
              <div className="flex"><h5>Flex 5C5 Rank</h5></div>
              <div className="quand"><p>il y a un jour</p></div>
              <hr width={50}></hr>
              <div className="gameEtat"><p>Defaite</p></div>
              <div className="timePlayed"><p>29:50</p></div>
            </div>
            <div className="iconeChamp&summ">
              <div className="imgChamp">
                <img src="/LoL_Icon_Rendered_Hi-Res.png" width={80} />
              </div>
              <div className="item">
                
                
              </div>

            </div>
            <div className="summoners">

            </div>




          </div>

        </div>


      </div>
      
      

        

        

   
    )
}
export default Stats;