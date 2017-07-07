'use strict';

let typechecks = require('./type-checks');

module.exports = {

    /*
     * getOwnPropertyValue
     * @param json
     * @param key
     * <p>Delegates to <code>hasOwnProperty(json, key) and if the check is true the key used as json access key and the
     * return value will be returned.</code>
     */
    'getOwnPropertyValue' : function (json, key) {
        if (this.hasOwnProperty(json, key)) {
            return json[key];
        }
        return null;
    },


    /*
     * hasOwnProperty
     * @param json
     * @param key
     * <p>When both parameters are not null/empty the <code>hasOwnProperty(key)</code> is called on the json parameter with
     * the key as parameter.
     * The boolean return value will also returned. If the initial empty check fails false is returned.
     */
    'hasOwnProperty' : function (json, key) {
        if (!typechecks.isEmpty(json)
            && !typechecks.isEmpty(key)) {

            return json.hasOwnProperty(key);
        }
        else {
            if (typechecks.isEmpty(json)) {
                console.log('[warn] hasOwnProperty: json parameter is null/empty.');
            }
            if (typechecks.isEmpty(key)) {
                console.log('[warn] hasOwnProperty: key parameter is null/empty.');
            }
        }
        return false;
    },

    /*
     * hasOwnPropertyValue
     * @param json
     * @param key
     * <p>Delegate to <code>getOwnPropertyValue(json, key)</code> and determines the return type. This value is delegated
     * to <code>typechecks.isEmpty(obj)</code> analyse for emptyness. The inverted boolean is returned.
     */
    'hasOwnPropertyValue' : function (json, key) {
        return (! typechecks.isEmpty( getOwnPropertyValue(json, key)));
    }

};
