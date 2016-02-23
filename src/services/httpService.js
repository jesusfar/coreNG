/**
 * server.js
 * 
 * serviceServiceApi for test only
 * 
 * @category   seedApp
 * @package    Scripts
 * @subpackage Services
 * @author     Jesus Farfan <jesu.farfan23@gmail.com>
 * @copyright  2015 - Jesus Farfan
 * @license    Jesus Farfan <http://www.jesusfarfan.com>
 * @link       http://www.jesusfarfan.com
 */
(function (){
    var coreNGService = angular.module('coreNGService');
    
    coreNGService.service('httpService', ['$http', 'loggerService', function ($http, loggerService){
        return {
            sendRequest : function (method, url, data, headers, callback) {
                
                loggerService.debug('httpService->sendRequest() Starting...');
                loggerService.debug('httpService->sendRequest() Sending request to url: ' + url);
                                
                $http({
                        method  : method,
                        url     : url,
                        data    : data,
                        headers : {
                            //'Content-Type-Version' : infoUrl.headers.contentTypeVersion.value,
                          // 'RestrictedUri'        : headers.RestrictedUri
                        }
                })
                .success(function(data, status, headers, config){

                    var result = {
                        statusResponse  : status,
                        dataResponse    : data,
                        headersResponse : headers,
                        configResponse  : config
                    };

                    loggerService.debug('httpService->sendRequest() Success! dataResponse :');
                    loggerService.debug(result);
                    
                    callback(null, result);
                })
                .error(function(data, status, headers, config){
                    var result = {
                        statusResponse  : status,
                        dataResponse    : data,
                        headersResponse : headers,
                        configResponse  : config
                    };

                    loggerService.debug('httpService->sendRequest() Error! dataResponse :');
                    loggerService.debug(result);

                    callback(result, null);
                });
            }
            
        };
    }]);
    
}());
