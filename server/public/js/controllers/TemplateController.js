controllers.controller(APP.CONTROLLERS.TemplateController, TemplateController);

TemplateController.$inject = ['$scope', '$http', '$q', APP.MESSAGES, 'utils'];

function TemplateController($scope, $http, $q, APP_MESSAGES, utils) {


	$scope.appInfoObj = {
		name : null,
		desc : null,
		packageName : null,
		location : null,
		fromDate : null,
		toDate : null
	};
    		/**********************************************************************************
	* Navigate to different view
	* @param newUrl
	* @return 
	*/
	$scope.navigate = function(newUrl){
		window.location.href = newUrl;
	};

	/**********************************************************************************
	* Navigate to app builder view
	* @param 
	* @return 
	*/
	$scope.loadAppBuilderPage = function(){
		
		localStorage.setItem("appInfo",JSON.stringify($scope.appInfoObj));
		$scope.navigate('/appBuilder');	
	};

	function init() {
		console.log('Template Controller');
		$scope.coverPicture = "https://s3.amazonaws.com/media.guidebook.com/upload/gears/guidetemplate/cover/conference.png"
		$scope.profilePicture = "https://s3.amazonaws.com/media.guidebook.com/upload/sX34UzP3ve5vp7fqE5DAQLMIHLJdCfAtNhxwOqog/PRTCF2HqvMyikMrwI7FMu2boomcpiAdBpVf7.png"
	};

	init();

    $scope.uploadCoverPicture = function(element){
        var reader = new FileReader();
        reader.onload = $scope.coverImageIsLoaded;
        reader.readAsDataURL(element.files[0]);
    }

    $scope.coverImageIsLoaded = function(e){
        $scope.$apply(function() {
        	if(e.target.result){
        		$scope.coverPicture = e.target.result;
        	}else{
				$scope.coverPicture = "https://s3.amazonaws.com/media.guidebook.com/upload/gears/guidetemplate/cover/conference.png"
        	}
            
            $scope.uploadImage(e.target.result);
        });
    }

    $scope.uploadProfilePicture = function(element){
        var reader = new FileReader();
        reader.onload = $scope.profileImageIsLoaded;
        reader.readAsDataURL(element.files[0]);
    }

    $scope.profileImageIsLoaded = function(e){
        $scope.$apply(function() {
        	if(e.target.result){
            	$scope.profilePicture = e.target.result;
        	}else{
				$scope.profilePicture = "https://s3.amazonaws.com/media.guidebook.com/upload/sX34UzP3ve5vp7fqE5DAQLMIHLJdCfAtNhxwOqog/PRTCF2HqvMyikMrwI7FMu2boomcpiAdBpVf7.png"
        	}
            $scope.uploadImage(e.target.result);
        });
    }

    $scope.uploadImage = function ($image) {
    	console.log('in')
	    //var formdata = new FormData();
	    //formdata.append('image', $image);
        //formdata.append('filePath', 'sponsors/')
		
		var formdata = {
			'image': $image,
			'filePath': 'sponsors'
		}
        var request = {
            method: 'POST',
            url: 'http://localhost:8080/fileUpload',
            data: formdata,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

		console.log(request);
        $http(request)
            .then(function (success){
				console.log(success)
   			},function (error){
   				console.log(error)
   			});
    }



}