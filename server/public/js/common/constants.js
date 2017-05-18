var APP = {
    APP_NAME: "AppBuilder-console",
    MESSAGES : "APP_MESSAGES",
    MODULES : {
        MAIN : "main",
        CONTROLLERS : "controllers",
        DIRECTIVES : "directives",
        DRAGANDDROP : "angular-drag-to-reorder",
        UTILS : "utils",
        MESSAGES : "messages",
        ROUTES : "appRoutes"
    },
    CONTROLLERS : {
        LoginController : "LoginController",
        HomeController : "HomeController",
        TemplateController : "TemplateController",
        AppBuilderController : "AppBuilderController"
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
            Credentials : "Credentails_console"
        },
        ERROR_CODES : {
            SERVER_ERROR : "SERVER_ERROR",
            NETWORK_ERROR : "NETWORK_ERROR",
            UNAUTHORIZED : "UNAUTHORIZED"
        }
    },
    ALERTS : {
        SUCCESS : {
            className : 'alert__success'
        },
        ERROR : {
            className : 'alert__error',
        },
        WARNING : {
            className : 'alert__warning'
        }
    }
};