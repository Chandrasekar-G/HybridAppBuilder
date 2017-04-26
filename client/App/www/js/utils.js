utils.provider('utils', Core);

Core.$inject = [];

function Core() {

    var provider = {};
    provider.$get = Factory;

    Factory.$inject = ['$q', '$http', '$rootScope', '$timeout', '$ionicPopup', '$ionicLoading', 'Logger', 'LocalStorage', 'SessionStorage'];

    function Factory($q, $http, $rootScope, $timeout, $ionicPopup, $ionicLoading, Logger, LocalStorage, SessionStorage) {

        var service = {};

        service.Logger = Logger;

        service.init = init;
        service.localStorage = LocalStorage;
        service.sessionStorage = SessionStorage;
        service.callBackend = callBackend;
        service.handleError = handleError;
        service.showAlert = showAlert;
        service.showConfirmationDialog = showConfirmationDialog;
        service.showSpinner = showSpinner;
        service.hideSpinner = hideSpinner;

        function init() {
            Logger.debug("utils - init: start");

            Logger.debug("utils - init: end");
        }

        function callBackend(requestType, methodName, requestData, headers, options) {
            Logger.debug("utils - callBackend: start");

            var deferred = $q.defer();

            // if (!headers) {
            //     var token = $rootScope.user.token;
            //     headers = {
            //         'Authorization': 'Basic ' + token
            //     };
            // }
            if (!headers) headers = {};

            var req = {
                method: requestType,
                url: SB.BACK_END.RootURL + methodName,
                headers: headers
            };

            if (options) {
                for (var key in options) {
                    req[key] = options[key];
                }
            }

            if (requestData) {
                if (requestType == SB.BACK_END.RequestType.GET) {
                    req.params = requestData;
                } else if (requestType == SB.BACK_END.RequestType.POST) {
                    req.data = requestData;
                }
            }

            Logger.debug("utils - callBackend: MethodType: " + req.method);
            Logger.debug("utils - callBackend: MethodName: " + methodName);
            Logger.debug("utils - callBackend: requestData: ");
            Logger.debug(requestData);
            console.dir(req);

            $http(req).then(function (response) {
                Logger.debug("utils - callBackend: response: ");
                Logger.debug(response);

                if (response.data.isSuccess) {
                    deferred.resolve(response.data.data);
                } else {
                    deferred.reject(response.data.error);
                }
            }, function (error) {
                Logger.error(error);

                var errorResponse = {};

                if (error.status == 401) {
                    errorResponse.code = SB.BACK_END.ERROR_CODES.UNAUTHORIZED;
                }
                else if (error.status == 500) {
                    errorResponse.code = SB.BACK_END.ERROR_CODES.SERVER_ERROR;
                }
                else {
                    errorResponse.code = SB.BACK_END.ERROR_CODES.NETWORK_ERROR;
                }

                deferred.reject(errorResponse);
            });

            Logger.debug("utils - callBackend: end");
            return deferred.promise;
        }

        function handleError(error) {
            service.Logger.debug("$utils.handleError : start");

            try {
                var message = service.SB_MESSAGES[error.code];
                message = service.SB_MESSAGES[error.code];
                if(!message){
                  message = SB_MESSAGES.GENERIC_ERROR_MESSAGE;
                }
                return message;
            } catch (e) {
                return service.SB_MESSAGES.GENERIC_ERROR_MESSAGE;
            }

        }

        function showAlert(title, template) {
            $ionicPopup.alert({
                title: title,
                template: template
            });
        }

        function showConfirmationDialog(title, template, successCallback, failureCallback) {
            
            var confirmPopup = $ionicPopup.confirm({
                title:  title,
                template: template
            });

            confirmPopup.then(function(res) {
                if(res) {
                    if(successCallback) {
                        successCallback();
                    }
                } else {
                    if(failureCallback) {
                        failureCallback();
                    }
                }
            });
        }

        function showSpinner() {
            $ionicLoading.show({
                templateUrl: 'templates/loaders/global_loader.html'
            });
        }

        function hideSpinner() {
            $ionicLoading.hide();
        }

        return service;
    }

    return provider;
}
