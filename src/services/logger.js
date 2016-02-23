/**
 * logger.js
 * 
 * logger Service
 * 
 * @category   seedApp
 * @package    Scripts
 * @subpackage Services
 * @author     Jesus Farfan <jesus.farfan@nidarbox.com>
 * @copyright  2015 - Jesus Farfan
 * @license    Jesus Farfan <http://www.jesusfarfan.org>
 * @link       http://www.jesusfarfan.org
 */
(function (){
    var coreNGService = angular.module('coreNGService');
    
    coreNGService.service('loggerService', ['configApp', function (configApp){
        return {
            debug : function (message) {
                if (configApp.debug) {
                    console.log(message);    
                }
            },
            error : function (message) {
                if (configApp.debug) {
                    console.log('Error : ' + message);    
                }
            }
            
        };
    }]);
    
}());