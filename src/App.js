import {useState} from 'react';
import {data} from './data';
import Carousel from './carusel';
import './App.css';





function App() {
const [jewelry, setJewelry]=useState(data);



const removeJewelry=(id)=>{
  let newJewelry=jewelry.filter((earing)=>earing.id !==id);
  setJewelry(newJewelry)
}

return(<div>

<div className="container">
<h1 className="jeweler-top">Your Jeweller</h1>
<hr
        style={{
          background: 'grey',
          color: 'grey',
        
          width:'40%',
        }}
      />
</div>

{jewelry.map((item=>{
  const {id, jname, images, description, price} =item;
  return(
    <div key={id}>
     
      <div className="container">

<div className="container">
<Carousel images={images}/> 
</div>
 <div className="container">
<h2 className="jname">{jname}</h2>      
<p className="description">{description}</p>        
<h2 className="price">{price}</h2>
</div>
      </div>

<div className="container">
  <button className="remove"onClick={()=>removeJewelry(id)}>Remove Jewelry</button>
</div>
<hr
        style={{
          background: 'grey',
          color: 'grey',
        
          width:'40%',
        }}
      />
    </div>)

}))}


<div className="container">
  <button className="btn" onClick ={()=>setJewelry([])}>Delete all</button>
</div>

</div>
)
}
export default App;
