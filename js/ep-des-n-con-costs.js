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
                uiChanged: function () {
                    console.log('ui changed');
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
            ui: {
                elem: document.getElementById('ep-des-n-con-costs'),
                
                main: {

                    /**
                     * Gets number of house floors from UI
                     *
                     * @getter floors
                     * @return {Number} floors
                     */
                    get floors(){
                            var floors = 1;
                            return floors;
                    },

                    /**
                     * Sets number of house floors to UI
                     *
                     * @setter floors
                     * @param {Number} floors
                     */
                    set floors(floors){

                    },

                    /**
                         * Gets area value from UI
                         *
                         * @getter area
                         * @return {Number} area
                         */
                    get area(){
                        var area = 0;
                        return area;
                    },

                    /**
                     * Sets area value to UI
                     *
                     * @setter area
                     * @param {Number} area
                     */
                    set area(area){

                    },

                    /**
                     * Shows total cost
                     *
                     * @setter totalCost
                     * @param {Number} totalCost
                     */
                    set totalCost(totalCost){

                    },

                    /**
                     * Shows message
                     *
                     * @setter message
                     * @param {String} message
                     */
                    set message(message){

                    }
                },

                design: {
                    architect: {
                        /**
                         * Checks if the user selected to include this section
                         *
                         * @getter included
                         * @return {Boolean} value
                         */
                        get included(){
                            var value = true;
                            return value;
                        },

                        /**
                         * Sets the section UI element to checked/unchecked
                         *
                         * @setter included
                         * @param {Boolean} value
                         */
                        set included(value){

                        },

                        base: {
                            /**
                             * Checks if the user selected to include this item
                             *
                             * @getter included
                             * @return {Boolean} value
                             */
                            get included(){
                                var value = true;
                                return value;
                            },

                            /**
                             * Sets the UI item element to checked/unchecked
                             *
                             * @setter included
                             * @param {Boolean} value
                             */
                            set included(value){

                            },

                            /**
                             * Shows Item cost
                             *
                             * @setter cost
                             * @param {Number} cost
                             */
                            set cost(cost){

                            }
                        },

                        roofs: {
                            /**
                             * Checks if the user selected to include this item
                             *
                             * @getter included
                             * @return {Boolean} value
                             */
                            get included(){
                                var value = true;
                                return value;
                            },

                            /**
                             * Sets the UI item element to checked/unchecked
                             *
                             * @setter included
                             * @param {Boolean} value
                             */
                            set included(value){

                            },

                            /**
                             * Shows Item cost
                             *
                             * @setter cost
                             * @param {Number} cost
                             */
                            set cost(cost){

                            }
                        },
                        
                        territory: {
                            /**
                             * Checks if the user selected to include this item
                             *
                             * @getter included
                             * @return {Boolean} value
                             */
                            get included(){
                                var value = true;
                                return value;
                            },

                            /**
                             * Sets the UI item element to checked/unchecked
                             *
                             * @setter included
                             * @param {Boolean} value
                             */
                            set included(value){

                            },

                            /**
                             * Shows Item cost
                             *
                             * @setter cost
                             * @param {Number} cost
                             */
                            set cost(cost){

                            }
                        }
                    },

                    construct: {
                        base: {},
                        beams: {},
                        rafters: {}
                    }
                }
            },

            init: function(){
                this.ui.elem.addEventListener('change', function(){
                    MODULE.controller.events.uiChanged();
                }, false);
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