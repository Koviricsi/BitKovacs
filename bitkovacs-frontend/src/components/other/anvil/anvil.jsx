import './anvil.css'
import anvilBase from '../../../assets/images/content/anvilBase_sketch.png'
import anvilEffect from '../../../assets/images/content/anvilEffect_sketch.png'
import anvilNumbers from '../../../assets/images/content/anvilNumbers_sketch.png'
import anvilHammer from '../../../assets/images/content/anvilHammer_sketch.png'

function Anvil(){
    return(
        <div className='anvilContainer'>
            <img src={anvilBase}></img>
            <img src={anvilEffect}></img>
            <img src={anvilNumbers}></img>
            <img src={anvilHammer}></img>
        </div>
    );
}

export default Anvil