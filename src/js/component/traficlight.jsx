import React, {useState} from "react";


const TraficLight = () => {
	const [luz,setLuz] = useState(" selected");
	// const [amarillo,setAmarillo] = useState("luzAmarilla");
	// const [verde,setVerde] = useState("luzVerde");
	return (
		<div className="text-center">
			<div className="poste"></div>
			<div className="semaforo">
			<div className="luzRoja"{luz}
				onClick= { ()=> { 

					setLuz (luz)
				}}></div>
				<div className={amarillo} 
				onClick= { ()=> {
					setAmarillo (amarillo+ " selected")
				}}></div>
				<div className={verde} 
				onClick= { ()=> {
					setVerde (verde+ " selected")
				}}></div>
			</div>
		</div>
	);
};

export default TraficLight;