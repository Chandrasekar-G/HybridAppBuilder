var APP = {
    MODULES : {
        MAIN : "main",
        CONTROLLERS: "controllers",
        UTILS: "utils",
        LOGGER : "Logger",
        LOCAL_STORAGE : "LocalStorage",
        SESSION_STORAGE : "SessionStorage"
    },
    CONTROLLERS : {
        LoginController : "LoginController",
        MenuController : "MenuController",
        SessionsController : "SessionsController",
        SessionDetailsController : "SessionDetailsController",
        BreakoutsController : "BreakoutsController",
        EventsController : "EventsController",
        SponsorsController : "SponsorsController",
        SponsorDetailsController : "SponsorDetailsController",
        SpeakersController : "SpeakersController",
        FAQController : "FAQController",
        ListController : "ListController",
        FeedbackController : "FeedbackController",
        GalleryController : "GalleryController",
        CustomListController : "CustomListController",
        WebViewController : "WebViewController",
        FBController : "FBController",
        YouTubeController : "YouTubeController",
        TwitterController : "TwitterController",
        MapController : "MapController",
        EmergencyController : "EmergencyController"
    },
    FACTORIES :  {     
        Logger : "Logger",
        LocalStorage : "LocalStorage",
        SessionStorage : "SessionStorage"
    },
    DB : {
        RootURL: "https://ccf536b3-265f-4e75-bd37-efd45bb3417b-bluemix.cloudant.com/",
        DBName : "appbuilder/",
        Headers : {
            "Authorization" : "Basic Y2NmNTM2YjMtMjY1Zi00ZTc1LWJkMzctZWZkNDViYjM0MTdiLWJsdWVtaXg6ZTdlMDVjZjlkNzdjZmY1MjBlZTI0YzM0NzYxMzM5ZWE1Y2Y4N2Q0YTQ1OTliMTUzNjgyMDVmMDQzNzJiNzAzMA==",
            "Host" : "ccf536b3-265f-4e75-bd37-efd45bb3417b-bluemix.cloudant.com",
            "ContentType" : "application/json"
        },
        RequestType: {
            GET: "GET",
            POST: "POST",
            PUT : "PUT"
        },
        MethodName : {
            Find : "_find",
            Create : "_bulk_docs",
        },
        DocID : {
            Credentials : "Credentails_console",
            Sponsors : "Sponsors_Kickoff",
            Gallery : "Gallery_Kickoff",
            Speakers : "Speakers_Kickoff",
            List : "List_Kickoff",
            Sessions : "Sessions_Kickoff"
        },
        ERROR_CODES : {
            SERVER_ERROR : "SERVER_ERROR",
            NETWORK_ERROR : "NETWORK_ERROR",
            UNAUTHORIZED : "UNAUTHORIZED"
        },
        ERROR_MESSAGES : {
            GENERIC_ERROR : "Generic Error occured"
        }
    }
};