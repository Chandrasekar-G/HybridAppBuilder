controllers.controller(APP.CONTROLLERS.AppBuilderController, AppBuilderController);

AppBuilderController.$inject = ['$scope', '$q', APP.MESSAGES, 'utils'];

function AppBuilderController($scope, $q, APP_MESSAGES, utils) {

	$scope.colorPalette = [ "#439FD8","#1377B3","#E63462","#E06962","#A25C92",
							"#C16CAE","#379474","#50B391","#B3B7B2","#777971"];
	
	$scope.modules = {
       
	};

	$scope.featureModules = {
		
		SCHEDULES : {
				TITLE : "Schedules",
				ORDER : "1",
				ICON : "/assets/img/menu/schedules.png",
				DESC : "Individual Sessions in your events",
				ENABLED : true,
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
			TITLE : "Breakouts",
			ORDER : "21",
			ICON : "/assets/img/menu/breakouts.png",
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
			TITLE : "Events",
			ORDER : "3",
			ICON : "/assets/img/menu/events.png",
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
			TITLE : "Sponsors",
			ORDER : "4",
			ICON : "/assets/img/menu/sponsors.png",
			DESC : "Information on sponsors who sponsor your conference",
			ENABLED : true,
			HOME : true,
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
			TITLE : "Speakers",
			ORDER : "5",
			ICON : "/assets/img/menu/speakers.png",
			DESC : "List of Keynote speakers of the event",
			ENABLED : true,
			HOME : false,
			STATE : {
				NAME : 'app.speakers',
				URL : "/speakers",
				TEMPLATEURL : "templates/speakers.html",
				CONTROLLER : "SpeakersController",
				CACHE : false
			}
		},
		FAQ : {
			TITLE : "FAQs",
			ORDER : "6",
			ICON : "/assets/img/menu/faq.png",
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
			TITLE : "Exhibitor",
			ORDER : "7",
			ICON : "/assets/img/menu/exhibitor.png",
			DESC : "Firms who are exhibiting their products in your conference",
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
			TITLE : "Feedback",
			ORDER : "18",
			ICON : "/assets/img/menu/feedback.png",
			DESC : "Feedback form to be filled out by the participants",
			ENABLED : true,
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
			TITLE : "Gallery",
			ORDER : "9",
			ICON : "/assets/img/menu/gallery.png",
			DESC : "Gallery of pics from your previous events",
			ENABLED : true,
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
			TITLE : "List",
			ORDER : "10",
			ICON : "/assets/img/menu/list.png",
			DESC : "Any information that you could group as a list ",
			ENABLED : true,
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
			TITLE : "Web Site",
			ORDER : "11",
			ICON : "/assets/img/menu/www.png",
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
			TITLE : "FB Page",
			ORDER : "12",
			ICON : "/assets/img/menu/fb.png",
			DESC : "Integrate your FB page into the app",
			ENABLED : true,
			HOME : false,
			STATE : {
				NAME : 'app.fb',
				URL : "/fb",
				TEMPLATEURL : "templates/fb.html",
				CONTROLLER : "FBController",
				CACHE : false
			}
		},
		YOUTUBE : { 
			TITLE : "YouTube Channel",
			ORDER : "13",
			ICON : "/assets/img/menu/youtube.png",
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
			TITLE : "Twitter Handle",
			ORDER : "14",
			ICON : "/assets/img/menu/twitter.png",
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
			TITLE : "Venue Map",
			ORDER : "15",
			ICON : "/assets/img/menu/maps.png",
			DESC : "A venue Map of the area where the event takes place",
			ENABLED : true,
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
			TITLE : "Emergency Contact",
			ORDER : "16",
			ICON : "/assets/img/menu/emergency.png",
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

	$scope.applyTheme = function(colorCode){
		var sideMenuElements = angular.element( document.getElementsByClassName( 'side-menu-items' ) );
		sideMenuElements.css("background",colorCode);
		sideMenuElements.css("color","#d7dde0");
	};

	$scope.addFeatureToSideMenu = function(featureKey){
		var featureModule = $scope.featureModules; 
		var featureObject = featureModule[featureKey];

		if(!$scope.modules.hasOwnProperty(featureKey)){
			$scope.modules[featureKey]= featureObject;
		}else{
			console.log("duplicate");
		}
				
	};

	$scope.removeFeatureFromSideMenu = function(featureKey){
		delete $scope.modules[featureKey];				
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

	$scope.showFeatures = function(){
		var featureElement = angular.element( document.querySelector( '.features' ) );
		featureElement.css("right",0);
		featureElement.addClass('show');
		var phoneShell = angular.element( document.querySelector( '.phone-shell' ) );
		phoneShell.css("right","400px");
		var toggleContainer = angular.element( document.querySelector( '.toggle-container' ) );
		toggleContainer.css("right","400px");
	};

	$scope.hideFeatures = function(){
		
		var featureElement = angular.element( document.querySelector( '.features' ) );
		featureElement.css("right","-400px");
		featureElement.removeClass('show');
		var phoneShell = angular.element( document.querySelector( '.phone-shell' ) );
		phoneShell.css("right",0);
		var toggleContainer = angular.element( document.querySelector( '.toggle-container' ) );
		toggleContainer.css("right",0);
	};

	function init() {
		console.log('App Builder Controller');
	};

	init();
}