var BUILDER = {
    APP_NAME : "IBM Connect",
    APP_ICONS : "icons",
    COMPONENTS : {
        SCHEDULES : {
            TITLE : "Sessions",
            ORDER : "1",
            ICON : "menu/schedules.png",
            ENABLED : true,
            HOME : false,
            STATE : {
                NAME : 'app.sessions',
                URL : "/sessions",
                TEMPLATEURL : "templates/sessions.html",
                CONTROLLER : "SessionsController",
                CACHE : false
            },
            SUB_STATE : {
                NAME : 'app.sessionDetails',
                URL : "/sessions/:sessionId",
                TEMPLATEURL : "templates/sessionDetails.html",
                CONTROLLER : "SessionDetailsController",
                CACHE : false
            }
        },
        BREAKOUTS : {
            TITLE : "Breakouts",
            ORDER : "21",
            ICON : "menu/breakouts.png",
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
            ICON : "menu/events.png",
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
            ICON : "menu/sponsors.png",
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
            ICON : "menu/speakers.png",
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
            ICON : "menu/faq.png",
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
            ICON : "menu/exhibitor.png",
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
            ICON : "menu/feedback.png",
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
            ICON : "menu/gallery.png",
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
            TITLE : "Miscellaneous",
            ORDER : "10",
            ICON : "menu/list.png",
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
            ICON : "menu/www.png",
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
            ICON : "menu/fb.png",
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
            ICON : "menu/youtube.png",
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
            ICON : "menu/twitter.png",
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
            ICON : "menu/maps.png",
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
            ICON : "menu/emergency.png",
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
    }
}