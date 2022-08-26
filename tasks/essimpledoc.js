/*
Copyright - 2021 - wwwouaiebe - Contact: https://www.ouaie.be/

This  program is free software;
you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation;
either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
/*
Changes:
	- v1.0.0:
		- created
Doc reviewed 20211114
*/
/* ------------------------------------------------------------------------------------------------------------------------- */

'use strict';

module.exports = function ( grunt ) {
	grunt.task.registerMultiTask ( 
		'essimpledoc', 
		'Building the HTML documentation from the JS sources.', 
		async function ( ) {
			var done = this.async ( );
			( await import ( 'essimpledoc' ) ).startESSimpledDoc ( {
				src : this.options ( ).src,
				dest : this.options ( ).dest,
				validate : this.options ( ).validate,
				noFiles : this.options ( ).noFiles,
				launch : this.options ( ).launch,
				noSourcesColor : this.options ( ).noSourcesColor
			} );
			done ( );
		}
	);
};

/* --- End of file --------------------------------------------------------------------------------------------------------- */