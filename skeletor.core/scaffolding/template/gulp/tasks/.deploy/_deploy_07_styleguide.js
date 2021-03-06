'use strict';

// import sherpa   from 'style-sherpa';
//
// let gulp;
// let plugins;
// let app;
// let self;
//
// module.exports = function ( _gulp, _plugins, _app ) {
//     gulp = _gulp;
//     plugins = _plugins;
//     app = _app;
//     self = app.fn.tasks.taskname(__filename);
//
//     // // Pruefen, ob alle Tasks bereits definiert und registriert wurden
//     // app.fn.tasks.ensureTaskDependencies(gulp, plugins, app, app.tasks, []);
//     //
//     // // Task definieren
//     // gulp.task( 'generate-styleguide', generateStyleGuide );
//
//     // if necessary - register depending tasks
//     let self_tasks = app.fn.tasks.registerDependingTasksNeu(app.tasks, self);
//
//     // define Task
//     app.fn.tasks.defineTask(self, self_tasks, generateStyleGuide);
//
//     // define task
//     gulp.task( self,
//         generateStyleGuide
//     );
// };
//
// /**
//  * generateStyleGuide
//  * Task-Function
//  * @param cb
//  * Generate a style guide from the Markdown content and HTML template in styleguide/
//  */
// function generateStyleGuide(cb) {
//     sherpa(
//         'src/styleguide/index.md',
//         {
//             output: app.config.paths.dist + '/styleguide.html',
//             template: 'src/styleguide/template.html'
//         },
//         cb
//     );
// }
