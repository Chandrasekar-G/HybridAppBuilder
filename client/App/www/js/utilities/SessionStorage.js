angular.module(APP.MODULES.SESSION_STORAGE).factory(APP.FACTORIES.SessionStorage, SessionStorage);

SessionStorage.$inject = [];

function SessionStorage() {
    var service = {};

    service.setItem = setItem;
    service.getItem = getItem;
    service.setObject = setObject;
    service.getObject = getObject;
    service.removeItem = removeItem;

    return service;

    function setItem(key, value) {
        window.sessionStorage.setItem(key, value);
    }

    function getItem(key) {
        return window.sessionStorage.getItem(key);
    }

    function setObject(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    function getObject(key) {
        var value = window.sessionStorage.getItem(key);

        if(value) {
            return JSON.parse(value);
        }
        else {
            return null;
        }
    }

    function removeItem(key) {
        window.sessionStorage.removeItem(key);
    }
}
