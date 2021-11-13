'use strict';

module.exports = function ( grunt ) {
	grunt.task.registerMultiTask ( 
		'essimpledoc', 
		'Build the HTML documentation from the JS sources.', 
		async function ( ) {
			let params = {
				src : this.options ( ).src,
				dest : this.options ( ).dest,
				validate : this.options ( ).validate,
				launch : this.options ( ).launch,
				noSourcesColor : this.options ( ).noSourcesColor
				
			}
			this.async ( );
			let esd = await import ( 'essimpledoc' );
			esd.startESSimpledDoc ( params );
		}
	);
};