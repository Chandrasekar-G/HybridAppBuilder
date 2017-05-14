controllers.controller(APP.CONTROLLERS.ListController, ListController);

ListController.$inject = ['$scope', '$rootScope', '$state','$ionicModal', '$q', 'utils'];

function ListController($scope, $rootScope, $state, $ionicModal, $q, utils) {
console.log("Lis");
 $scope.$on('$ionicView.enter', onEnter);

    $scope.getList = getList;
    $scope.List = null;

    function onEnter() {
        $scope.getList();
    };

    function getList() {
		var requestData = {};
        utils.showSpinner();
		let deferred = $q.defer();
        utils.callBackend(APP.DB.RequestType.GET, APP.DB.DocID.List, requestData, true)
        .then((response) => {
            deferred.resolve(response);
            $scope.List = response;
            $scope.title = response[0].title;
            for(var index in $scope.List) {
                var desc = $scope.List[index].desc,
                    descs = desc.split("|"),
                    name = [],
                    value = [];
                for(i in descs) {
                    if(i%2 == 0)
                        name.push(descs[i]);
                    else    
                        value.push(descs[i]);
                }
                $scope.List[index].name = name;
                $scope.List[index].value = value;
            }
            console.log($scope.List);
            utils.localStorage.setObject("list", $scope.List);
            console.log("list");
        }, (error) => {
            var message = utils.handleError(error);
            deferred.reject(message);
        });
        utils.hideSpinner();
        return deferred.promise;
	};

    onEnter();

}
