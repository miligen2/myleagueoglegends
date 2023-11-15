import "./header.css"
import logoLol  from '/LoL_Icon_Rendered_Hi-Res.png'

function Header({ inputValue }) {
    return (
        <header>
            <nav>
                 <div className="logo">
                    <div className="pseudo borderRight">
                        <img src={logoLol} alt="lol" />
                        <h1>{inputValue}</h1>
                    </div>
                    <div className="pseudoUni">
                        <h1>{inputValue} #EUW</h1>
                    </div>      
                </div>
                <div className="menu">
                    <ul>
                         <li className="borderRight">
                            <a href="#"><h4>HOME</h4></a>
                        </li>
                        <li className="borderRight">
                            <a href="#"><h4>CHAMPIONS</h4></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;