var yo = require('yo-yo');

module.exports = function layout(content){
return yo`
<div>
	<nav class ="header">
		<div class="nav-wrapper">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 offset-m1">
						<a href="#" class="brand-logo titulo">LeyGram</a>
					</div>
					<div class="col s2 m6 push-s10 push-m10">
						<a href="#" class="btn btn-large btn-flat">
							<i class="fa fa-user-circle-o" aria-hidden="true"></i>
						</a>
						<ul>
							<li><a href="" class=""></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
	${content}
</div>
`;
}


