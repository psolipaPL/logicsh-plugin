const fs = require('fs'),
	path = require('path');

	const configs = {
		path: '/platforms/android/app/src/main/res/values/themes.xml',
		path2: '/platforms/android/app/src/main/res/xml/config.xml',
		path3: '/platforms/android/app/src/main/AndroidManifest.xml'
	}

	const readFile = (name, filePath) => {
		console.log(name + ": \n\n\n" + fs.readFileSync(filePath, "utf-8"));
	}

function manifestChanger (androidManifestPath){
    let androidManifest = fs.readFileSync(androidManifestPath, "utf-8");
	androidManifest = androidManifest.replace('android:theme="@style/Theme.App.SplashScreen"', 'android:theme="@style/Theme.AppCompat.Translucent"')
	console.log(androidManifest);
	fs.writeFileSync(androidManifestPath, androidManifest);
        
}


	module.exports = function(context) {
			readFile("Themes", context.opts.projectRoot + configs.path)
			readFile("Config", context.opts.projectRoot + configs.path2)
			//manifestChanger(context.opts.projectRoot + configs.path3);
		
	}
