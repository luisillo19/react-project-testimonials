import "../style-sheets/Testimonio.css";

function Testimonio(props) {
	return (
		<div className="contenedor__testimonio">
			<img
				className="imagen__testimonio"
				src={require(`../images/testimonio-${props.imagen}.png`)}
				alt={`Foto de ${props.alt}`}
			/>

			<div className="contenedor__texto-testimonio">
				<p className="nombre__testimonio">
					<strong>{props.nombre}</strong> en {props.pais}
				</p>
				<p className="cargo__testimonio">
					{props.cargo} en <strong>{props.empresa}</strong>
				</p>
				<p className="texto__testimonio">
					{props.testimonio.inicio}
					<strong>{props.testimonio.resaltado}</strong>
					{props.testimonio.final}
				</p>
			</div>
		</div>
	);
}

export default Testimonio;
