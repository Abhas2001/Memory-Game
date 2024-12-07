import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const[selected,setselected]=useState([]);
  const[selecteditem,setselecteditem]=useState([]);
 const[count,setcount]=useState(0);
const data = ['A','B','C','D','E','F','A','B','C','D','E','F']

const handleclick = (id,item) => {
   
 setselected((prev)=>[...prev,id]);
 setselecteditem((prev)=>[...prev,item])
  
 setcount((prev)=>prev+1)
}

useEffect(()=>{
if(selecteditem.length===2 && selecteditem[0]!==selecteditem[1]){
 console.log("hfdj");

   setTimeout(() => {
    setselected((prev) => prev.slice(0, -2));
    
   }, 2000);
   
   setselecteditem([])
 
}
if(selecteditem.length===4 && selecteditem[2]!==selecteditem[3]){
  console.log("hfdj");
 
    setTimeout(() => {
      setselected((prev) => prev.slice(0, -2));
     
    }, 2000);
    
    setselecteditem([])
 
  
 }
 if(selecteditem.length===6 && selecteditem[4]!==selecteditem[5]){
  console.log("hfdj");
 
    setTimeout(() => {
      setselected((prev) => prev.slice(0, -2));
     
    }, 2000);
    
    setselecteditem([])
 
  
 }


},[selecteditem])
console.log(selected);
console.log(selecteditem);


  return (

    <section className='score'>
      
      <p>Move:{count}</p>
      
    <div className="App">
    



    <div className="btn" >

      <button className='buttons' id='1' onClick={()=>handleclick('1',data[0])}>{selected.includes('1')&&data[0]}</button>
      <button className='buttons' id='2' onClick={()=>handleclick('2',data[1])}>{selected.includes('2')&&data[1]}</button>
      <button className='buttons' id='3' onClick={()=>handleclick('3',data[2])}>{selected.includes('3')&&data[2]}</button>
      <button className='buttons' id='4' onClick={()=>handleclick('4',data[3])}>{selected.includes('4')&&data[3]}</button>
      <button className='buttons' id='5' onClick={()=>handleclick('5',data[4])}>{selected.includes('5')&&data[4]}</button>
      <button className='buttons' id='6' onClick={()=>handleclick('6',data[5])}>{selected.includes('6')&&data[5]}</button>
      <button className='buttons' id='7' onClick={()=>handleclick('7',data[6])}>{selected.includes('7')&&data[6]}</button>
      <button className='buttons' id='8' onClick={()=>handleclick('8',data[7])}>{selected.includes('8')&&data[7]}</button>
      <button className='buttons' id='9' onClick={()=>handleclick('9',data[8])}>{selected.includes('9')&&data[8]}</button>
      <button className='buttons' id='10' onClick={()=>handleclick('10',data[9])}>{selected.includes('10')&&data[9]}</button>
      <button className='buttons' id='11' onClick={()=>handleclick('11',data[10])}>{selected.includes('11')&&data[10]}</button>
      <button className='buttons' id='12' onClick={()=>handleclick('12',data[11])}>{selected.includes('12')&&data[11]}</button>
    </div>

          
   
    </div>
    </section>
  );
}

export default App;
