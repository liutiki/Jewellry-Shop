import {useState} from 'react';
import next from './next.png';
import './App.css';

function Carousel ({images}){

const[earing, setEaring]=useState(0);




const nextEaring=()=>{
    setEaring((earing=>{
        earing++;
        if (earing> images.length-1){
            earing=0;
        }
        
        return earing;
    }))
}
return(
    <div>
    
        <img src={images[earing]} width="300px"alt="earings"/>
        <div className="container">
   
        <button className="btn-next"onClick={nextEaring}><img src={next} width="40px" alt="next"/></button>
        </div>
    </div>
)

}

export default Carousel;