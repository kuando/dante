/**
 * Created by Frank on 15/11/23.
 */

module.exports.register = function (hbs) {

    hbs.registerHelper('importStyles', function (styles) {
        let result = "";
        if (!styles || styles == null) {
            return result;
        }
        if (styles instanceof Array) {
            styles.forEach(style=> {
                result += `<link href="/css/${style}.css" rel="stylesheet">`;
            });
        }
        return result;
    });

    hbs.registerHelper('importScripts', function (scripts) {
        let result = "";
        if (!scripts || scripts == null) {
            return result;
        }
        if (scripts instanceof Array) {
            scripts.forEach(script=> {
                result += `<script href="/js/lib/${script}.js"></script>`;
            });
        }
        return result;
    });
};