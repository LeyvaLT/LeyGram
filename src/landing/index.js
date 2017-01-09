var yo = require('yo-yo');

module.exports = function landing(form) {
	return yo `
<div class="container landing">
	<div class="row">
		<div class="col s10 push-s1">
			<div class="row">
				<div class="col m5 hide-on-small-only">
					<img src="iphone2.png" class="iphone">
				</div>
				${form}
			</div>
		</div>
	</div>
</div>`;
}