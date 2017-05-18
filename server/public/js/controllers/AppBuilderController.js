controllers.controller(APP.CONTROLLERS.AppBuilderController, AppBuilderController);

AppBuilderController.$inject = ['$scope','$rootScope', '$q', APP.MESSAGES, 'utils','$timeout','$http'];

function AppBuilderController($scope,$rootScope, $q, APP_MESSAGES, utils, $timeout, $http) {

	$scope.appInfo = {};

	$scope.uploadFile = {
		file : {
			file : null
		}
	};

	$scope.uploadData = "";
	
	$scope.fetchData = fetchData;

	$scope.colorPalette = [ {BG:"#439FD8",COLOR:"#d7dde0"},{BG:"#1377B3",COLOR:"#d7dde0"},{BG:"#E63462",COLOR:"#d7dde0"},
	{BG:"#E06962",COLOR:"#d7dde0"},{BG:"#A25C92",COLOR:"#d7dde0"},{BG:"#C16CAE",COLOR:"#d7dde0"},{BG:"#379474",COLOR:"#d7dde0"},
	{BG:"#50B391",COLOR:"#d7dde0"},{BG:"#B3B7B2",COLOR:"#d7dde0"},{BG:"#777971",COLOR:"#d7dde0"},{BG:"#18154A",COLOR:"#4990E2"}
	];
	
	$scope.modules = [
       
	];

	$scope.slideIn = {
		content : "features"
	};

	$scope.featureModules = {
		
		SCHEDULES : {
				ID : "SCHEDULES",
				TITLE : "Schedules",
				ORDER : "1",
				ICON : "schedules.png",
				DESC : "Individual Sessions in your events",
				ENABLED : false,
				HOME : false,
				STATE : {
					NAME : 'app.scehdules',
					URL : "/schedules",
					TEMPLATEURL : "templates/schedules.html",
					CONTROLLER : "SchedulesController",
					CACHE : false
				}
			},
		BREAKOUTS : {
			ID: "BREAKOUTS",
			TITLE : "Breakouts",
			ORDER : "21",
			ICON : "breakouts.png",
			DESC : "Group sessions into different breakouts",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.breakouts',
				URL : "/breakouts",
				TEMPLATEURL : "templates/breakouts.html",
				CONTROLLER : "BreakoutsController",
				CACHE : false
			}
		},
		EVENTS : {
			ID : "EVENTS",
			TITLE : "Events",
			ORDER : "3",
			ICON : "events.png",
			DESC : "Special events common to all participants",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.events',
				URL : "/events",
				TEMPLATEURL : "templates/events.html",
				CONTROLLER : "EventsController",
				CACHE : false
			}
		},
		SPONSORS : {
			ID : "SPONSORS",
			TITLE : "Sponsors",
			ORDER : "4",
			ICON : "sponsors.png",
			DESC : "Information on sponsors who sponsor conference",
			ENABLED : false,
			HOME : false,
			SUB_STATE : true,
			STATE : {
				NAME : 'app.sponsors',
				URL : "/sponsors",
				TEMPLATEURL : "templates/sponsors.html",
				CONTROLLER : "SponsorsController",
				CACHE : false
			},
			SUB_STATE : {
				NAME : 'app.sponsorDetails',
				URL : "/sponsors/:sponsorId",
				TEMPLATEURL : "templates/sponsorDetails.html",
				CONTROLLER : "SponsorDetailsController",
				CACHE : false
			}
		},
		SPEAKERS : {
			ID : "SPEAKERS",
			TITLE : "Speakers",
			ORDER : "5",
			ICON : "speakers.png",
			DESC : "List of Keynote speakers of the event",
			ENABLED : false,
			HOME : true,
			STATE : {
				NAME : 'app.speakers',
				URL : "/speakers",
				TEMPLATEURL : "templates/speakers.html",
				CONTROLLER : "SpeakersController",
				CACHE : false
			}
		},
		FAQ : {
			ID : "FAQ",
			TITLE : "FAQs",
			ORDER : "6",
			ICON : "faq.png",
			DESC : "Frequently asked questions about some general info",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.faq',
				URL : "/faq",
				TEMPLATEURL : "templates/faq.html",
				CONTROLLER : "FAQController",
				CACHE : false
			}
		},
		EXHIBITORS : {
			ID : "EXHIBITORS",
			TITLE : "Exhibitor",
			ORDER : "7",
			ICON : "exhibitor.png",
			DESC : "Firms who are exhibiting their products in conference",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.exhibitor',
				URL : "/exhibitor",
				TEMPLATEURL : "templates/exhibitor.html",
				CONTROLLER : "ExhibitorController",
				CACHE : false
			}
		},
		FEEDBACK : {
			ID : "FEEDBACK",
			TITLE : "Feedback",
			ORDER : "18",
			ICON : "feedback.png",
			DESC : "Feedback form to be filled out by the participants",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.feedback',
				URL : "/feedback",
				TEMPLATEURL : "templates/feedback.html",
				CONTROLLER : "FeedbackController",
				CACHE : false
			}
		},
		GALLERY : {
			ID : "GALLERY",
			TITLE : "Gallery",
			ORDER : "9",
			ICON : "gallery.png",
			DESC : "Gallery of pics from your previous events",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.gallery',
				URL : "/gallery",
				TEMPLATEURL : "templates/gallery.html",
				CONTROLLER : "GalleryController",
				CACHE : false
			}
		},
		CUSTOM_LIST : {
			ID : "CUSTOM_LIST",
			TITLE : "List",
			ORDER : "10",
			ICON : "list.png",
			DESC : "Any information that you could group as a list ",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.list',
				URL : "/list",
				TEMPLATEURL : "templates/list.html",
				CONTROLLER : "ListController",
				CACHE : false
			}
		},
		WEB_VIEW : {
			
			ID : "WEB_VIEW",
			TITLE : "Web Site",
			ORDER : "11",
			ICON : "www.png",
			DESC : "Web view of your company or event site",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.site',
				URL : "/site",
				TEMPLATEURL : "templates/site.html",
				CONTROLLER : "WebViewController",
				CACHE : false
			}  
		},
		FB : {
			ID : "FB",
			TITLE : "FB Page",
			ORDER : "12",
			ICON : "fb.png",
			DESC : "Integrate your FB page into the app",
			ENABLED : false,
			HOME : false,
			LINK : "https://www.facebook.com/",
			STATE : {
				NAME : 'app.fb',
				URL : "/fb",
				TEMPLATEURL : "templates/fb.html",
				CONTROLLER : "FBController",
				CACHE : false
			}
		},
		YOUTUBE : { 
			ID : "YOUTUBE",
			TITLE : "YouTube Channel",
			ORDER : "13",
			ICON : "youtube.png",
			DESC : "Integrate your YouTube channel into the app",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.youtube',
				URL : "/youtube",
				TEMPLATEURL : " templates/youtube.html",
				CONTROLLER : "YouTubeController",
				CACHE : false
			}
		},
		TWITTER : {
			ID : "TWITTER",
			TITLE : "Twitter Handle",
			ORDER : "14",
			ICON : "twitter.png",
			DESC : "Integrate your Twitter handle with the app",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.twitter',
				URL : "/twitter",
				TEMPLATEURL : "templates/twitter.html",
				CONTROLLER : "TwitterController",
				CACHE : false
			}
		},
		MAP : {
			ID : "MAP",
			TITLE : "Venue Map",
			ORDER : "15",
			ICON : "maps.png",
			DESC : "A venue Map of the area where the event takes place",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.map',
				URL : "/map",
				TEMPLATEURL : "templates/map.html",
				CONTROLLER : "MapController",
				CACHE : false
			}
		},
		EMERGENCY_CONTACT : {
			ID : "EMERGENCY_CONTACT",
			TITLE : "Emergency Contact",
			ORDER : "16",
			ICON : "emergency.png",
			DESC : "Emergency Mobile numbers and other contact info",
			ENABLED : false,
			HOME : false,
			STATE : {
				NAME : 'app.emergency',
				URL : "/emergency",
				TEMPLATEURL : "templates/emergency.html",
				CONTROLLER : "EmergencyController",
				CACHE : false
			}
		}
	};


	function init() {
		console.log('App Builder Controller');
		$scope.appInfo = JSON.parse(localStorage.getItem("appInfo"));
	};

	$scope.applyTheme = function(colorCode,textColor){
		var sideMenuElements = angular.element( document.getElementsByClassName( 'side-menu-items' ) );
		sideMenuElements.css("background",colorCode);
		sideMenuElements.css("color",textColor);
	};

	$scope.addFeatureToSideMenu = function(featureKey){
		var featureModule = $scope.featureModules; 
		var featureObject = featureModule[featureKey];

		if($scope.modules.indexOf(featureObject) == -1){
			$scope.modules.push(featureObject);
		}else{
			console.log("duplicate");
		}

		modules = $scope.modules;
				
	};

	$scope.removeFeatureFromSideMenu = function(featureKey){
		var featureModule = $scope.featureModules; 
		var featureObject = featureModule[featureKey];
		$scope.modules.pop(featureObject);				
	};

	$scope.toggleButton = function(id){

		var buttonElements = angular.element( document.getElementsByClassName( 'button' ) );
		buttonElements.removeClass('selected-button');

		var selectedButton = angular.element( document.querySelector( '.'+id ) );
		selectedButton.addClass('selected-button');	
	};

	$scope.showFeatureOverlay = function(){
		
		var featureButton = angular.element( document.querySelector( '.feature' ) );
		if( featureButton.hasClass('selected-button') ){
			var featureOverlay = angular.element( document.querySelector( '.feature-overlay' ) );
			featureOverlay.css("display","block");
		}
	};

	$scope.hideFeatureOverlay = function(){

		var featureOverlay = angular.element( document.querySelector( '.feature-overlay' ) );
		featureOverlay.css("display","none");
		
	};

	$scope.showSlideIn = function(slideInName){

		$scope.slideIn.content = slideInName;
		var featureElement = angular.element( document.querySelector( '.slide-in' ) );
		featureElement.css("right",0);
		featureElement.addClass('show');
		var phoneShell = angular.element( document.querySelector( '.phone-shell' ) );
		phoneShell.css("right","400px");
		var toggleContainer = angular.element( document.querySelector( '.toggle-container' ) );
		toggleContainer.css("right","400px");
	};

	$scope.hideSlideIn = function(){
	
		var featureElement = angular.element( document.querySelector( '.slide-in' ) );
		featureElement.css("right","-400px");
		featureElement.removeClass('show');
		var phoneShell = angular.element( document.querySelector( '.phone-shell' ) );
		phoneShell.css("right",0);
		var toggleContainer = angular.element( document.querySelector( '.toggle-container' ) );
		toggleContainer.css("right",0);
	};

	$scope.handleIsHome = function(featureKey){

		for(var i = 0 ; i < $scope.modules.length ; i++){

			if($scope.modules[i].ID != featureKey){
				$scope.modules[i].HOME =  false;
			}
		}
	};

	function CSVToArray(strData, strDelimiter) {
		// Check to see if the delimiter is defined. If not,
		// then default to comma.
		strDelimiter = (strDelimiter || ",");
		// Create a regular expression to parse the CSV values.
		var objPattern = new RegExp((
		// Delimiters.
		"(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
		// Quoted fields.
		"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
		// Standard fields.
		"([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
		// Create an array to hold our data. Give the array
		// a default empty first row.
		var arrData = [[]];
		// Create an array to hold our individual pattern
		// matching groups.
		var arrMatches = null;
		// Keep looping over the regular expression matches
		// until we can no longer find a match.
		while (arrMatches = objPattern.exec(strData)) {
			// Get the delimiter that was found.
			var strMatchedDelimiter = arrMatches[1];
			// Check to see if the given delimiter has a length
			// (is not the start of string) and if it matches
			// field delimiter. If id does not, then we know
			// that this delimiter is a row delimiter.
			if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
				// Since we have reached a new row of data,
				// add an empty row to our data array.
				arrData.push([]);
			}
			// Now that we have our delimiter out of the way,
			// let's check to see which kind of value we
			// captured (quoted or unquoted).
			if (arrMatches[2]) {
				// We found a quoted value. When we capture
				// this value, unescape any double quotes.
				var strMatchedValue = arrMatches[2].replace(
				new RegExp("\"\"", "g"), "\"");
			} else {
				// We found a non-quoted value.
				var strMatchedValue = arrMatches[3];
			}
			// Now that we have our value string, let's add
			// it to the data array.
			arrData[arrData.length - 1].push(strMatchedValue);
		}
		// Return the parsed data.
		return (arrData);
	};

	function CSV2JSON(csv) {
		var array = CSVToArray(csv);
		var objArray = [];
		for (var i = 1; i < array.length; i++) {
			objArray[i - 1] = {};
			for (var k = 0; k < array[0].length && k < array[i].length; k++) {
				var key = array[0][k];
				objArray[i - 1][key] = array[i][k]
			}
		}

		var json = JSON.stringify(objArray);
		var str = json.replace(/},/g, "},\r\n");

		return str;
	};

	function fetchData() {

		$timeout(

			function(){
				console.log($scope.uploadFile.file.file);
				var json = CSV2JSON($scope.uploadFile.file.file);
				console.log(json);
				$scope.uploadData = json;
			},100);

    };

	$scope.uploadDataToBackend = function(uploadKey){
	
		var uploadData = {};
		var primaryUploadData = {};
		var docs = [];
		var dataObject = JSON.parse($scope.uploadData);


		var requestData = {};
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET,uploadKey+"_"+($scope.appInfo.name.replace(/\s/g,'')).toLowerCase(), requestData, true)
        .then((response) => {
            deferred.resolve(response);
			console.log(response);
			
			uploadData = response.data;
			uploadData["data"] = dataObject;
		
			console.log(uploadData);
			
			let deferredUpload = $q.defer();
			utils.callBackend(APP.DB.RequestType.PUT, uploadKey+"_"+($scope.appInfo.name.replace(/\s/g,'')).toLowerCase(), uploadData, true)
			.then((response) => {
				deferredUpload.resolve(response);
				console.log(response);
			}, (error) => {
				var message = utils.handleError(error);
				deferredUpload.reject(message);
			});

        }, (error) => {
			var message = utils.handleError(error);
            deferred.reject(message);

			primaryUploadData["_id"] = uploadKey+"_"+($scope.appInfo.name.replace(/\s/g,'')).toLowerCase();
			primaryUploadData["documentType"] = uploadKey;
			primaryUploadData["data"] = dataObject;
			docs.push(primaryUploadData);
			uploadData["docs"] = docs;

			console.log(uploadData);
			
			let deferredInsert = $q.defer();
			utils.callBackend(APP.DB.RequestType.POST, APP.DB.MethodName.Create, uploadData, true)
			.then((response) => {
				deferredInsert.resolve(response);
				console.log(response);
			}, (error) => {
				var message = utils.handleError(error);
				deferredInsert.reject(message);
			});
        });

	
	};

	$scope.generatePreview = function(){

		for(var i = 0 ; i < $scope.modules.length ; i++){
			$scope.featureModules[$scope.modules[i].ID].ENABLED = true;
			$scope.featureModules[$scope.modules[i].ID].ORDER = i;
		}
		var builderObject = {};
		builderObject["APP_NAME"] = $scope.appInfo.name;
		builderObject["APP_ICON"] = "icon.png";
		builderObject["START_DATE"] = $scope.appInfo.fromDate;
		builderObject["END_DATE"] = $scope.appInfo.toDate;
		builderObject["DESC"] = $scope.appInfo.desc;
		builderObject["PACKAGE_NAME"] = $scope.appInfo.packageName;
		builderObject["LOCATION"] =$scope.appInfo.location;
		builderObject["COMPONENTS"] =$scope.featureModules;
		
		console.log(builderObject);

		$http.post('http://localhost:8080/buildApp', builderObject)
		.then((response) => {
			console.log(response);
        }, (error) => {
            console.log(error);
        });

	};

	init();
}