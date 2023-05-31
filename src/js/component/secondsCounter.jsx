import React from "react";
import propTypes from "prop-types";

export const SecondsCounter = (Props) => {
	
	return (
		<>     
		
		<div className="row" style={{backgroundColor:"black",paddingTop:"10px"}}>
			<div className="card text-bg-dark mb-3 text-center mx-auto" style={{width: "10rem",minHeight:"14rem"}}>
				<h1 className="card-title my-auto" style={{fontSize:"8rem"}}><i className="fa-regular fa-clock " style={{color:"#ffffff", fontSize:"8rem"}}></i></h1>
			</div>
			<Numero numeroValor={parseInt(Props.timer/10000 % 10)}/> 
			<Numero numeroValor={parseInt(Props.timer/10000 % 10)}/>	 
			<Numero numeroValor={parseInt(Props.timer/1000 % 10)}/>
			<Numero numeroValor={parseInt(Props.timer/100 % 10)}/>
			<Numero numeroValor={parseInt(Props.timer/10 % 10)}/>
			<Numero numeroValor= {parseInt(Props.timer % 10)}/>
		 </div>
	</>
 );
};

const Numero=(Props)=>{
	return(
		
		<div className="card text-bg-dark mb-3 text-center mx-auto" style={{width: "10rem",minHeight:"14rem"}}>
			<h1 className="card-title my-auto" style={{fontSize:"8rem"}}>{Props.numeroValor}</h1>
			{Props.children}
		</div>
	)
}

Numero.propTypes ={
	numeroValor:propTypes.number
}


export default SecondsCounter;
//Ruben Arismendi.