var yo = require('yo-yo');
var landing = require('../landing');

var form = yo`
<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="titulo">LeyGram</h1>
			<form class="signup-form">
				<h2>Registrate para ver fotos de tus amigos del ITLP</h2>
				<div class="section">
					<a href="#" class="btn btn-fb hide-on-small-only"><i class="fa fa-facebook-official"></i>     Registrate con Facebook</a>
					<a href="#" class="btn btn-fb hide-on-med-and-up">Iniciar secion</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="Correo electronico"/>
					<input type="text" name="nombre" placeholder="Nombre completo"/>
					<input type="text" name="username" placeholder="nombre de usuario"/>
					<input type="password" name="password" placeholder="Contraseña"/>
					<button class="btn btn-signup waves-effect waves-ligth " type="sumit">Registrar</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">¿Tienes una cuenta?<a href="/signin"> Entrar</a></div>
	</div>
</div>`;

module.exports = landing(form);