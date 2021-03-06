'use strict';

import gulp     from 'gulp';
import gulpplugins  from 'gulp-load-plugins';
import yargs    from 'yargs';
// import promise  from 'es6-promise';

var fn = require('./gulp/functions');

// Load all Gulp plugins into one variable
const plugins = gulpplugins();

const app = {
    'config': fn.config.loadConfigs(),
    'tasks': fn.tasks.loadTaskConfigs(),
    'isProductive': !!(yargs.argv.production),
    'fn' : fn
};

/*
 * load dynamically all tasks
 */
fn.tasks.addTasks( gulp, plugins, app, app.tasks );


/* ==============================
 *  # Functions
 * ============================== */


/**
 * defaultTask
 * @param cb
 */
function defaultTask(cb) {
    // Pruefen, ob alle Tasks bereits definiert und registriert wurden
    fn.tasks.ensureTaskDependencies( gulp, plugins, app, app.tasks, [
        'run',
    ]);
    cb();
}

/**
 * usage
 * @param cb
 */
function usage(cb) {
    console.log('\r\nList of all registred tasks:\r\n');
    fn.tasks.lookupTasknames(app.tasks);
    console.log('');
    console.log('npm start {taskname}\r\n');
    cb();
}



/* ==============================
 *  # Tasks
 * ============================== */


/**
 * Task: default
 * runs: run task
 */
gulp.task('default',
    gulp.series(
        defaultTask,
        'run'
    )
);

/**
 * Task: usage
 * runs: usage function
 */
gulp.task('usage', usage );
