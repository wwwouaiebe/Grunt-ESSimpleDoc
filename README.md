# Grunt-ESSimpleDoc
 
Grunt plugin for [ESSimpleDoc](https://github.com/wwwouaiebe/ESSimpleDoc).

## Installation

You may install this plugin with this command:

```
npm install grunt-essimpledoc --save-dev

```

## What to do in your Gruntfile.js

In your Gruntfile.js, add a section named essimpledoc to the data object passed into grunt.initConfig()
```
grunt.initConfig({
	essimpledoc: {
		options : {
			src : './src',
			dest : './techDoc',
			validate : true,
			launch : true,
			noSourcesColor : false
		}
	}
});
```

You have also to load the plugin ;

```
grunt.loadNpmTasks('grunt-essimpledoc');

```

And finally, register a task that load essimpledoc

grunt.registerTask( 'esd', [ 'essimpledoc' ] );

```

## About the options

- src : It's the directory where the source files are.
- dest : Its the directory where the documentation will be placed. **Be sure this directory don't contains any file**. 
The complete directory will be deleted when ESSimpleDoc start. 
- validate : a validation of the documentation will be performed when true.
- launch : tour browser will be started and the index.html page of the documentation will be opened when true
- noSourcesColor : syntax colors and links to the classes and variables will not be added to the documentation when true.

Notice: **src** and **dest** options are mandatory and the the directories must exists before you lauchn ESSimpleDoc. Others
options are not mandatory and set to false when missing.

See more explanations on the options on the [ESSimpleDoc](https://github.com/wwwouaiebe/ESSimpleDoc) page.

## Multiple configurations

You can also have multiple configurations :

```
grunt.initConfig({
	essimpledoc: {
		debug : {
			options : {
				src : './src',
				dest : './techDoc',
				noSourcesColor : true
			}
		},
		release : {
			options : {
				src : './src',
				dest : './techDoc',
				validate : true,
				launch : true
			}
		}
	}
});

```

And then multiple tasks :

```
grunt.registerTask( 'esdDebug', [ 'essimpledoc:debug' ] );

grunt.registerTask( 'esdRelease', [ 'essimpledoc:release' ] );

```
