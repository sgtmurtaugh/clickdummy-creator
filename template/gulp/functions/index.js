'use strict';

let gulp;
let plugins;
let app;

module.exports = function (_gulp, _plugins, _app) {
    gulp =_gulp;
    plugins = _plugins;
    app = _app;

    return {
        'fs': require('fs'),
        'path': require('path'),

        'config': require('./config-utils'),
        'typechecks': require('./type-checks'),

        'tasks': require('./task-utils')(gulp, plugins, app)
    };
};
