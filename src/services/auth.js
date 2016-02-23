/**
 * auth.js
 * 
 * authorizacionApi Service
 * 
 * @category   seedApp
 * @package    Scripts
 * @subpackage Services
 * @author     Jesus Farfan <jesu.farfan23@nidarbox.com>
 * @copyright  2014 - Jesus Farfan
 * @license    Jesus Farfan <http://www.jesusfarfan.com>
 * @link       http://www.jesusfarfan.org
 */
(function (){
    var coreNGService = angular.module('coreNGService');
    
    coreNGService.factory('authUserService', function () {
        var auth = {
            isAuthenticated       : false
        }
        return auth;
    });

    coreNGService.factory('authInterceptorService', ['$window', 'configSeedApp', 'Base64', 'authServiceUserApi', 'loggerService', function ($window, configSeedApp, Base64, authServiceUserApi, loggerService){
        return {
            request: function (config) {
                loggerService.debug('authInterceptorService->Interceptor Request() Recive config -> ' + config);
                loggerService.debug(config);

                // To do : deprecate with Base64
                var encoded = Base64.encode(configSeedApp.SERVER.API.KEYAPI.USER + ':' + configSeedApp.SERVER.API.KEYAPI.PWD);
                var token     = "";

                config.headers = config.headers || {};

                // Delete from headers RestrictedUri
                delete config.headers.RestrictedUri;

                var isRestritedAccessUri = (config.headers.RestrictedUri == "true") ? true : false;
                
                if (authServiceUserApi.isAuthenticated && isRestritedAccessUri) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                } else {
                    config.headers.Authorization = 'Basic ' + encoded;    
                }

                loggerService.debug('authInterceptorService->Interceptor Request() transform config -> ' + config);
                loggerService.debug(config);

            return config;
            }
        };
    }]);
    
}());

