import isRoot from 'is-root';

let gulp;
let plugins;
let app;
let self;

module.exports = function ( _gulp, _plugins, _app ) {
    gulp = _gulp;
    plugins = _plugins;
    app = _app;
    self = app.fn.tasks.taskname(__filename);

    // // Sub-Tasks lookup
    // let self_tasks = app.fn.tasks.lookupDependentTasknames(app.tasks, self);

    // // if necessary - register depending tasks
    // app.fn.tasks.ensureRegistrationOfDependingTasks(gulp, plugins, app, app.tasks, self_tasks);

    // define task
    gulp.task( self,
        checkRequirements
    );
};

/**
 * checkRequirements
 * Task-Function
 * @param cb
 * <p>Checks the clone requirements
 */
function checkRequirements(cb) {
    if (isRoot()) {
        console.log(messages.noRoot);
        cb(new Error());
    }
    cb();
}
