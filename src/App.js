import "./App.css";
import Testimonio from "./components/Testimonio";
import testimonios from "./testimonios-data";

function App() {
	return (
		<div className="app">
			<div className="main__container">
				<h1>Here is what our alumni say about freeCodeCamp:</h1>
				{testimonios.map((testimonio, index) => (
					<Testimonio
						key={index}
						nombre={testimonio.nombre}
						pais={testimonio.pais}
						empresa={testimonio.empresa}
						imagen={testimonio.imagen}
						cargo={testimonio.cargo}
						testimonio={testimonio.testimonio}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
