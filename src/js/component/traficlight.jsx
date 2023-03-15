import React from "react";


const TraficLight = () => {
	return (
		<div className="text-center">
			<div className="poste"></div>
			<div className="semaforo">
				<div className="luzRoja"></div>
				<div className="luzAmarilla"></div>
				<div className="luzVerde selected"></div>
			</div>
		</div>
	);
};

export default TraficLight;