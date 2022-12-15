import React, {useState} from "react";
import './Calculator.css';

function Calculator(){
const [number1, setNumber1]=useState("");
const [number2, setNumber2]=useState("");
const [results, setresults]=useState(0);

const onAdd=(e)=>{
    e.preventDefault();
   const sumx=+number1 + +number2;
setresults(sumx)
};

const onSub=(e)=>{
    e.preventDefault();
   const sub=number1-number2;
setresults(sub)
};

const onMulp=(e)=>{
    e.preventDefault();
   const mul=number1* number2;
setresults(mul)
};

const onDiv=(e)=>{
    e.preventDefault();
   const div=number1 / number2;
setresults(div)
};
const onPer=(e)=>{
    e.preventDefault();
   const Per=number1 / number2*100 ;
setresults(Per)
};
const onClear=(e)=>{
    e.preventDefault();
   setNumber1("")
   setNumber2("")
};
const onDel=(e)=>{
    e.preventDefault();
   setresults(0)
};



return (
    <div>
  <div className="ui three column grid">


  <div className="column disp1">
    {/* <div className="d1 ui segment"> 
    </div> */}
  </div>


  <div className="column disp2">
    <div className="d2 ui segment">
        <div className="headingDiv"><h1><i className="calculator icon"></i> Calculator</h1></div>

   <form className="ui form">
  <div className="field">
    {/* <label>Enter 1st No.</label> */}
    <div className="ui pointing below label">
      Enter First Number
    </div>
    <input type="number" 
     placeholder="1st Number"
     value={number1}
     onChange={(e)=>{ setNumber1(e.target.value)}}/>
  </div>
  

  <div className="field">
    {/* <label>Enter 2nd No.</label> */}
    <div className="ui pointing below label">
      Enter Second Number
    </div>
    <input type="number" 
     placeholder="2nd Number"
     value={number2}
     onChange={(e)=>{ setNumber2(e.target.value)}}/>  
  </div>
<div className="buttonSection">
   <button className="ui button" onClick={onAdd} >+</button>
   <button className="ui button" onClick={onSub} >-</button>
   <button className="ui button" onClick={onMulp} >X</button>
   <button className="ui button" onClick={onDiv} >/</button>
   <button className="ui button" onClick={onPer} >%</button>
   <button className="ui button" onClick={onClear}  >clear</button>
</div>
<div className="resultDiv">{results}</div>
  
  <div className="delButtonBox">
  <button className="delbtn ui button" onClick={onDel}  >Delete</button>
  </div>

  </form>
    </div>
  </div>

  <div className="column disp3">
    {/* <div className="d3 ui segment">
    </div> */}
  </div>

</div>
    </div>
    
)  
};
export default Calculator;