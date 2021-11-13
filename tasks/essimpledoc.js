'use strict';

module.exports = function ( grunt ) {
	grunt.task.registerMultiTask ( 
		'essimpledoc', 
		'Build the HTML documentation from the JS sources.', 
		async function ( ) {
			this.async ( );
			( await import ( 'essimpledoc' ) ).startESSimpledDoc ( {
				src : this.options ( ).src,
				dest : this.options ( ).dest,
				validate : this.options ( ).validate,
				launch : this.options ( ).launch,
				noSourcesColor : this.options ( ).noSourcesColor
			} );
		}
	);
};