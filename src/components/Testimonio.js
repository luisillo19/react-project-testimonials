import "../style-sheets/Testimonio.css";

function Testimonio({imagen, pais, alt, empresa, cargo, nombre, testimonio}) {
	return (
		<div className="contenedor__testimonio">
			<img
				className="imagen__testimonio"
				src={require(`../images/testimonio-${imagen}.png`)}
				alt={`Foto de ${alt}`}
			/>

			<div className="contenedor__texto-testimonio">
				<p className="nombre__testimonio">
					<strong>{nombre}</strong> en {pais}
				</p>
				<p className="cargo__testimonio">
					{cargo} en <strong>{empresa}</strong>
				</p>
				<p className="texto__testimonio">
					{testimonio.inicio}
					<strong>{testimonio.resaltado}</strong>
					{testimonio.final}
				</p>
			</div>
		</div>
	);
}

export default Testimonio;
