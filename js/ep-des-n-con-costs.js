;
"use strict";

var app = app || {};
app.modules = app.modules || {};

window.onload = function() {
    // define module and add it to namespace
    app.modules.costsCalc = app.modules.costsCalc || {
            init: function(){
                this.view.init();
                this.model.init();
                this.controller.init();
            }
        };

    var MODULE = app.modules.costsCalc;

    /**
     * CONTROLLER
     *
     * Main controller
     *
     * @type {Object}
     */
    MODULE.controller = MODULE.controller || {
            events: {
                ui: {
                    /**
                     * Invoked when user changes any calc parameter
                     *
                     * @method changedParameters
                     * @return {undefined}
                     */
                    changedParameters: function(){
                        console.log('CONTROLLER.events.ui.changedParameters()');
                    }
                }
            },

            init: function(){
                console.log('CONTROLLER initiated...');
            }
        };

    /**
     * MODEL
     *
     * Does the Math with costs
     * Returns number values
     * May have children objects - sections, which in turn may have their children an so on
     *
     * @type {Object}
     */
    MODULE.model = MODULE.model || {
            init: function(){
                console.log('MODEL initiated...');
            }
        };

    /**
     * VIEW
     *
     * Responsible for HTML<->CONTROLLER interactions
     * Listens to events and calls CONTROLLERS methods
     * Includes methods for DOM manipulations
     *
     * @type {Object}
     */

    MODULE.view = MODULE.view || {
            init: function(){
                console.log('VIEW initiated...');
            }
        };

            // listen to:
            //   section 1 "Main Parameters":
            //     - area {Number}
            //     - floors {Number}
            //   section 2 "Design":
            //     - include / not
            //     subsection 2-1 "Architecture":
            //       - Item 1: include / not
            //       - Item 2: include / not
            //                 ...
            //       - Item n: include / not
            //     subsection 2-2 "Constructions":
            //       - Item 1: include / not
            //       - Item 2: include / not
            //                 ...
            //       - Item n: include / not
            //   section 3 "Construct":
            //     - include / not
            //     subsection 3-1 "Basement"
            //       - include / not
            //       - type
            //       - value {Number}
            //     subsection 3-2 "Walls"
            //       - include / not
            //       - type
            //       - value {Number}
            //     subsection 3-3 "Floors"
            //       - include / not
            //       - type
            //       - value {Number}
            //     subsection 3-4 "Roof"
            //       - include / not
            //       - type
            //       - value {Number}

    // initialize
    MODULE.init();
};