 /**
 * CommonValidations.js
 * 
 * 
 * @category   Category
 * @package    Package
 * @subpackage Subpackage
 * @author     Jesus Farfan <jesu.farfan@nidarbox.com>
 * @copyright  2014 - Jesus Farfan
 * @license    Jesus Farfan <http://www.jesusfarfan.org>
 * @link       http://www.jesusfarfan.org
 */

(function (){
    
    'use strict';
    
   /**
    * CommonValidator
    * 
    * returns an Object with common validations
    * 
    * @returns {CommonValidator}
    */
    var CommonValidator = function () {

        // Regex pattern for validations

        var email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

        var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

        var numberInteger = /^(?:\+|-)?\d+$/;

        var numberNatural = /^[0-9]+$/;

        var numberNaturalDecimal = /^([0-9]+\.+[0-9]|[0-9])+$/; 

        var url = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)( [a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$/;

        //Password Secure between 6 char , almost one digit and one alfanumeric char and not special characters
        var passwordSecure = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

        // Date format YYYY/MM/DD
        var formatDate = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

        //Time format for example 12:45:33
        var formatTimeHour = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

        var numberPhone = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;

        var postalCode = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;

        var onlyLetters = /^[a-z]+$/i;

        var numberBoolean = /^\d{1}[0-1]/;


        /**
         * requiredSatisfied
         * 
         * @param {mixed}     input
         * @returns {Boolean}
         */
        this.requiredSatisfied = function(input) {
            
            if (this.isEmpty(input)) {
                throw 'Field is required';
            } 
            
            return true;
        };

        /**
         * isString
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isString = function(input) {

            // Delete empty space
            input = input.replace(/\s/g,'');

            // Valid if only letters
            if (input.match(onlyLetters)) {
                return true;
            }
            throw 'Invalid String field';
        };

        /**
         * isNumeric
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isNumeric = function(input) {

            if (isNaN(input)) {
                throw 'Invalid Numeric field';
            }
            return true;
        };

        /**
         * isEmail
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isEmail = function(input) {

            if (input.match(email)) {
                return true;
            }

            throw 'Invalid email';
        };

        /**
         * isPasswordSecure
         * 
         * @param {type} input
         * @returns {Boolean}
         */
        this.isPasswordSecure = function(input) {

            if (input.match(passwordSecure)) {
                return true;
            }

            throw 'Invalid Password';
        };

        /**
         * isBoolean
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isBoolean = function(input) {

            if (input.match(numberBoolean)) {
                return true;
            }

            throw 'Invalid Boolean Field';
        };

        /**
         * isDate
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isDate = function(input) {

            if (input.match(formatDate)) {
                return true;
            }

            throw 'Invalid Date Field';
        };

        /**
         * isEmpty
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isEmpty = function(input) {
            
            if (input == "" || input.length == 0) {
                
                return true;
            }
            return false;
        };

        /**
         * isUnique
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isUnique = function (input) {
            if (input == 0) {
                return true;
            }
            throw 'Not unique';
        };

        /**
         * isPostalCode
         * 
         * @param {mixed} input
         * @returns {Boolean}
         */
        this.isPostalCode = function (input) {
            if (input.match(postalCode)) {
                return true;
            }
            throw 'Invalid Postal Code';
        };
        
        /**
         * isValidMinLength
         * 
         * @param {mixed} input
         * @param {int} minLength
         * 
         * @returns {Boolean}
         */
        this.isValidMinLength = function (input, minLength){
            if (input.length < minLength) {
                throw 'Invalid Min Length';
            }
            return true;
        }
        
        /**
         * isValidMinLength
         * 
         * @param {mixed} input
         * @param {int} minLength
         * 
         * @returns {Boolean}
         */
        this.isValidMaxLength = function (input, maxLength){
            if (input.length > maxLength) {
                throw 'Invalid Max Length';
            }
            return true;
        }
        
        this.isSatisfiedPatern = function (input, pattern) {
            if (input.match(pattern)) {
                return true;
            }
            throw 'Invalid Max Length';
        }
        
        /**
         * isSatisfied
         * 
         * @param {mixed} input
         * @param {array} validations
         * @returns {undefined}
         */
        this.isSatisfied = function (input, validations){
            var type;
            var result;
            for (var i = 0; i < validations.length; i++) {
                
                type = validations[i].toLowerCase();
                result = true;
                switch (type) {
                    case 'string':
                        this.isString(input);
                        break;
                    case 'integer':
                        this.isNumeric(input);
                        break;
                    case 'boolean':
                        this.isBoolean(input);
                        break;
                    case 'date':
                        this.isDate(input);
                        break;
                    case 'password':
                        this.isPasswordSecure(input);
                        break;
                    case 'email':
                        this.isEmail(input);
                    case 'required':
                        this.requiredSatisfied(input);
                        break;    
                }
            }
        };
        
        return this;
    };
    
    
    // We need declare and create a new Module
    var utilsValidators = angular.module("utilsValidators", []);

    // Now I set the constant for this module
    utilsValidators.constant('VERSION', '0.0.1');
    utilsValidators.constant('AUTHOR', 'Jesus Farfan');

    // Now I set a new service called serviceCommonValidator
    utilsValidators.service("serviceCommonValidator", CommonValidator);

})();
