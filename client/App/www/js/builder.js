var BUILDER = {
    APP_NAME : "IBM Connect",
    APP_ICONS : "icons",
    COMPONENTS : {
        SCHEDULES : {
            TITLE : "Schedules",
            ORDER : "1",
            ICON : "schedules.png",
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
            ICON : "breakouts.png",
            ENABLED : true,
            HOME : true,
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
            ICON : "events.png",
            ENABLED : true,
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
            ICON : "sponsors.png",
            ENABLED : true,
            HOME : false,
            STATE : {
                NAME : 'app.sponsors',
                URL : "/sponsors",
                TEMPLATEURL : "templates/sponsors.html",
                CONTROLLER : "SponsorsController",
                CACHE : false
            }
        },
        SPEAKERS : {
            TITLE : "Speakers",
            ORDER : "5",
            ICON : "speakers.png",
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
            ICON : "faq.png",
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
            ICON : "exhibitor.png",
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
            ORDER : "8",
            ICON : "feedback.png",
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
            TITLE : "Gallery",
            ORDER : "9",
            ICON : "gallery.png",
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
            TITLE : "List",
            ORDER : "10",
            ICON : "list.png",
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
            TITLE : "Web Site",
            ORDER : "11",
            ICON : "www.png",
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
            ICON : "fb.png",
            ENABLED : false,
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
            ICON : "youtube.png",
            ENABLED : true,
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
            ICON : "twitter.png",
            ENABLED : true,
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
            ICON : "maps.png",
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
            ICON : "emergency.png",
            ENABLED : true,
            HOME : false,
            STATE : {
                NAME : 'app.emergency',
                URL : "/emergency",
                TEMPLATEURL : "templates/emergency.html",
                CONTROLLER : "EmergencyController",
                CACHE : false
            }
        }
    }
}