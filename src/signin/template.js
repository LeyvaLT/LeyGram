var yo = require('yo-yo');
var landing = require('../landing');

var form = yo`
<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="titulo">LeyGram</h1>
			<form class="signup-form">
				<div class="section">
					<a href="#" class="btn btn-fb hide-on-small-only"><i class="fa fa-facebook-official"></i>     Iniciar sesion con Facebook</a>
					<a href="#" class="btn btn-fb hide-on-med-and-up">Iniciar secion</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="text" name="username" placeholder="nombre de usuario"/>
					<input type="password" name="password" placeholder="Contraseña"/>
					<button class="btn btn-signup waves-effect waves-ligth " type="sumit">Iniciar Secion</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">¿No tienes una cuenta?<a href="/signup"> Registrate</a></div>
	</div>
</div>`;

module.exports = landing(form);