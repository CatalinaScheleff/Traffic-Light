import React, {useState} from "react";


const TraficLight = () => {
	const [rojo,setRojo] = useState("luzRoja");
	const [amarillo,setAmarillo] = useState("luzAmarilla");
	const [verde,setVerde] = useState("luzVerde");
	return (
		<div className="text-center">
			<div className="poste"></div>
			<div className="semaforo">
			<div className={rojo} 
				onClick= { ()=> { 
					setRojo ((luz)=>
					luz === "luzRoja"? "luzRoja selected" : "luzRoja");
					setAmarillo("luzAmarilla");
					setVerde ("luzVerde");
					
				}}></div>
				<div className={amarillo} 
				onClick= { ()=> {
					setAmarillo ((luz)=>
					luz === "luzAmarilla"? "luzAmarilla selected" : "luzAmarilla");
					setRojo("luzRoja");
					setVerde ("luzVerde");
				}}></div>
				<div className={verde} 
				onClick= { ()=> {
					setVerde ((luz)=>
					luz === "luzVerde"? "luzVerde selected" : "luzVerde"
					);
					setAmarillo("luzAmarilla");
					setRojo ("luzRoja");
				}}></div>
			</div>
		</div>
	);
};

export default TraficLight;