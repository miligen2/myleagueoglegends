import cerlceLOL from '/CercleLOL.png'
import cercleLoL2 from '/2cer.png'
import './App.css'

function App() {


  return ( 
  <>
    <section id=''>
      <div className="presentation">
        <div className="cercle">
          <img src={cerlceLOL} width="745px" height="745px" alt="" />
        </div>
        <div className="cercle2">
          <img src={cercleLoL2} width={575} alt="" />
        </div>
        {/* TODO: à la maison refaire les cercle de cercle2 et en mettre plusieurs */}
        <div className="détails">
          <h1 className="nomDinvocateur">MILIGEN</h1>
          <h4 className='descInvocateur'>ETERNAL STUDENT</h4>
        </div>
      </div>

    </section>
 </>
  )
}

export default App
