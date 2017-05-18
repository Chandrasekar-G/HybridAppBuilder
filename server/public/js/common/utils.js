utils.provider('utils', Core);

Core.$inject = [];

function Core() {

    var provider = {};
    provider.$get = Factory;

    Factory.$inject = ['$q', '$http', '$rootScope', '$timeout', APP.MESSAGES];
    
    function Factory($q, $http, $rootScope, $timeout, APP_MESSAGES) {
        var spinner = angular.element(document.querySelector('.spinner-overlay'));
        var alert = angular.element(document.querySelector('.alert'));
        var service = {};

        service.APP_MESSAGES = APP_MESSAGES;

        service.init = init;
        service.callBackend = callBackend;
        service.handleError = handleError;
        service.showSpinner = showSpinner;
        service.hideSpinner = hideSpinner;
        service.showAlert = showAlert;


        function init() {
        
        }

        function callBackend(requestType, methodName, requestData, headers, options) {
            var deferred = $q.defer();

            if(!headers) headers = {};
            else {
                headers = {
                    'Authorization' : APP.DB.Headers.Authorization,
                    'Content-Type' : APP.DB.Headers.ContentType
                }
            }
            
            var req = {
                method: requestType,
                url: APP.DB.RootURL + APP.DB.DBName + methodName,
                headers: headers
            };

            if(options) {
                for(let key in options) {
                    req[key] = options[key];
                }
            }

            if (requestData) {
                if (requestType == APP.DB.RequestType.GET) {
                    req.params = requestData;
                } else {
                    req.data = requestData;
                }
            }

            console.dir(req);

            $http(req).then(function(response) {
                 
                if (response) {
                    deferred.resolve(response);
                } else {
                    deferred.reject(response.data.error);
                }
            }, function(error) {
                var errorResponse = {};
                
                if (error.status == 401) {
                    errorResponse.code = APP.DB.ERROR_CODES.UNAUTHORIZED;
                }
                else if (error.status == 500) {
                    errorResponse.code = APP.DB.ERROR_CODES.SERVER_ERROR;
                }
                else {
                    errorResponse.code = APP.DB.ERROR_CODES.NETWORK_ERROR;
                }
               
                deferred.reject(errorResponse);
            });
            return deferred.promise;
        }

        function handleError(error) {
           
            try {
                var message = service.APP_MESSAGES[error.code];
                message = service.APP_MESSAGES[error.code];
                return message;
            } catch (e) {
                return service.APP_MESSAGES.NETWORK_ERROR;
            }

        }

        function showSpinner() {
            spinner.removeClass('hide');
        }

        function hideSpinner() {
            spinner.addClass('hide');
        }

        function showAlert(type, message) {
            alert.html(message);   
            alert.removeClass('alert__success');
            alert.removeClass('alert__error');  
            alert.removeClass('alert__warning');   

            alert.addClass(type.className);   
            
            $timeout(() => {
                alert.removeClass(type.className);
                alert.removeClass('alert--show');
            }, 2000);

            alert.addClass('alert--show');
        }

        return service;
    }

    return provider;
}
