var fs = require('fs');
var func = function (filename) {
	fs.readFile(filename, function(error, data) {
	    if (error) {
	        console.log(error);
	        return;
	    }

	    var obj = JSON.parse(data);
	    var profiles = obj.profiles;

	    for(var i=0;i<profiles.length;i++) {
	    	if (profiles[i].image){
	    		if (profiles[i].image.filename.includes(".jpg")){
			    	fs.rename('../../images/' + profiles[i].image.filename, '../../images/' + profiles[i].full_name + '.jpg', function(err) {
			            if ( err ) console.log('ERROR: ' + err);
			        });
			            console.log(profiles[i].image.filename)
		    	}else{
		    		fs.rename('../../images/' + profiles[i].image.filename, '../../images/' + profiles[i].full_name + '.png', function(err) {
			            if ( err ) console.log('ERROR: ' + err);
			        });
			        console.log(profiles[i].image.filename)
		    	}
		    }
	    }
	});
}

func('../data/users1.json');
func('../data/users2.json');
func('../data/users3.json');
func('../data/users4.json');
func('../data/users5.json');
func('../data/users6.json');
func('../data/users7.json');
func('../data/users8.json');
