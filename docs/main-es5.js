(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/Work/game-of-life/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components */
      "lbq7");
      /* harmony import */


      var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-snotify */
      "90Zs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/frame/frame.component */
      "rhaZ");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(toastrService) {
          _classCallCheck(this, AppComponent);

          this.toastrService = toastrService;
          this.nRows = 17;
          this.nCols = 35;
          this.duration = 1;
          this.running = false;
        }

        _createClass(AppComponent, [{
          key: "startFrame",
          value: function startFrame() {
            var _this$validation = this.validation(),
                valid = _this$validation.valid,
                msg = _this$validation.msg;

            if (!valid) {
              this.showError(msg);
              return;
            }

            this.running = true;
            this.frame.run();
          }
        }, {
          key: "pauseFrame",
          value: function pauseFrame() {
            if (!this.running) return;
            this.running = false;
            this.frame.pause();
          }
        }, {
          key: "restartFrame",
          value: function restartFrame() {
            if (!this.running) return;
            this.frame.restart();
            this.frame.run();
          }
        }, {
          key: "showError",
          value: function showError(text) {
            this.toastrService.error(text, "Validation Error", {
              timeout: 2000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true
            });
          }
        }, {
          key: "changeAction",
          value: function changeAction() {}
        }, {
          key: "validation",
          value: function validation() {
            if (0.1 > this.duration || this.duration > 10) {
              return {
                valid: false,
                msg: "Duration value should be 0.1 ~ 10"
              };
            }

            if (this.nRows < 10) {
              return {
                valid: false,
                msg: "Rows should be large than 10"
              };
            }

            if (this.nCols < 20) {
              return {
                valid: false,
                msg: "Cols should be large than 20"
              };
            }

            return {
              valid: true
            };
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_components__WEBPACK_IMPORTED_MODULE_1__["FrameComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.frame = _t.first);
          }
        },
        decls: 33,
        vars: 5,
        consts: [[1, "container"], [1, "title"], [1, "content", "row"], [1, "left-pane", "col-lg-4"], [1, "actions-bars"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "input-group"], ["type", "number", 3, "ngModel", "ngModelChange", "input"], [1, "col-lg-8", "right-frame"], [3, "nCols", "nRows"], ["frame", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game of life - Test Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Control Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() {
              return ctx.startFrame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Start ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
              return ctx.pauseFrame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pause ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() {
              return ctx.restartFrame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Restart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Grid Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rows: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.nRows = $event;
            })("input", function AppComponent_Template_input_input_20_listener() {
              return ctx.changeAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Columns: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.nCols = $event;
            })("input", function AppComponent_Template_input_input_24_listener() {
              return ctx.changeAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Duration: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.duration = $event;
            })("input", function AppComponent_Template_input_input_28_listener() {
              return ctx.changeAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "gol-frame", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ng-snotify");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nRows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nCols);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.duration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nCols", ctx.nCols)("nRows", ctx.nRows);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_frame_frame_component__WEBPACK_IMPORTED_MODULE_4__["FrameComponent"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyComponent"]],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.left-pane[_ngcontent-%COMP%] {\n  margin: 50px 0;\n}\n\n.right-frame[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.actions-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px 15px;\n}\n\n.actions-bars[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ047O0FBRUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUFJO0VBQ0UsV0FBQTtBQUVOOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUFJO0VBQ0UsZ0JBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB9XG4gIFxuICAubGVmdC1wYW5lIHtcbiAgICBtYXJnaW46IDUwcHggMDtcbiAgfVxuICBcbiAgLnJpZ2h0LWZyYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmFjdGlvbnMtYmFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHggMTVweDtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDc1cHg7XG4gICAgfVxuICB9XG4gIFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBsYWJlbCB7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
          }]
        }], function () {
          return [{
            type: ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]
          }];
        }, {
          frame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_components__WEBPACK_IMPORTED_MODULE_1__["FrameComponent"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "WI6b":
    /*!************************************************!*\
      !*** ./src/app/services/generation.service.ts ***!
      \************************************************/

    /*! exports provided: MAX_INTENSITY, MIN_INTENSITY, GenerationService */

    /***/
    function WI6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_INTENSITY", function () {
        return MAX_INTENSITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MIN_INTENSITY", function () {
        return MIN_INTENSITY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenerationService", function () {
        return GenerationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MAX_INTENSITY = 255;
      var MIN_INTENSITY = 29;

      var GenerationService = /*#__PURE__*/function () {
        function GenerationService() {
          _classCallCheck(this, GenerationService);

          this.onStagnation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(GenerationService, [{
          key: "createInitalGrid",
          value: function createInitalGrid(nRows, nCols) {
            this.genMinus1 = "";
            this.genMinus2 = "";
            this.stagnation = false;
            var cells = [];

            for (var i = 0; i < nRows; i++) {
              var row = [];

              for (var j = 0; j < nCols; j++) {
                var alive = !!Math.round(Math.random());
                row.push({
                  alive: alive,
                  intensity: alive ? MAX_INTENSITY : MIN_INTENSITY
                });
              }

              cells.push(row);
            }

            return cells;
          }
        }, {
          key: "createEmptyGrid",
          value: function createEmptyGrid(nRows, nCols) {
            this.genMinus1 = "";
            this.genMinus2 = "";
            this.stagnation = false;
            var cells = [];

            for (var i = 0; i < nRows; i++) {
              var row = [];

              for (var j = 0; j < nCols; j++) {
                row.push({
                  alive: false
                });
              }

              cells.push(row);
            }

            return cells;
          }
        }, {
          key: "nextGeneration",
          value: function nextGeneration(cells) {
            if (!this.stagnation) this.checkStagnation(cells);
            var nextGen = this.cloneGen(cells);

            for (var i = 0; i < cells.length; i++) {
              for (var j = 0; j < cells[i].length; j++) {
                var amoutNeightbours = this.countNeightbours(cells, i, j);

                if (cells[i][j].alive) {
                  if (amoutNeightbours < 2 || amoutNeightbours > 3) {
                    nextGen[i][j].alive = false;
                  } else {
                    nextGen[i][j].alive = true;
                  }
                } else {
                  if (amoutNeightbours === 3) {
                    nextGen[i][j].alive = true;
                  }
                }
              }
            }

            return nextGen;
          }
        }, {
          key: "resetStagnation",
          value: function resetStagnation() {
            this.stagnation = false;
          }
        }, {
          key: "cloneGen",
          value: function cloneGen(cells) {
            return JSON.parse(JSON.stringify(cells));
          }
        }, {
          key: "countNeightbours",
          value: function countNeightbours(cells, i, j) {
            var cnt = 0;
            if (cells[i - 1] && cells[i - 1][j - 1] && cells[i - 1][j - 1].alive) cnt++;
            if (cells[i - 1] && cells[i - 1][j] && cells[i - 1][j].alive) cnt++;
            if (cells[i - 1] && cells[i - 1][j + 1] && cells[i - 1][j + 1].alive) cnt++;
            if (cells[i] && cells[i][j - 1] && cells[i][j - 1].alive) cnt++;
            if (cells[i] && cells[i][j + 1] && cells[i][j + 1].alive) cnt++;
            if (cells[i + 1] && cells[i + 1][j - 1] && cells[i + 1][j - 1].alive) cnt++;
            if (cells[i + 1] && cells[i + 1][j] && cells[i + 1][j].alive) cnt++;
            if (cells[i + 1] && cells[i + 1][j + 1] && cells[i + 1][j + 1].alive) cnt++;
            return cnt;
          }
        }, {
          key: "checkStagnation",
          value: function checkStagnation(newCells) {
            var currentGen = this.serializeGeneration(newCells);

            if (currentGen === this.genMinus1 || currentGen === this.genMinus2) {
              this.stagnation = true;
              this.onStagnation.emit();
            }

            this.genMinus2 = this.genMinus1;
            this.genMinus1 = currentGen;
          }
        }, {
          key: "serializeGeneration",
          value: function serializeGeneration(cells) {
            return JSON.stringify(cells);
          }
        }]);

        return GenerationService;
      }();

      GenerationService.ɵfac = function GenerationService_Factory(t) {
        return new (t || GenerationService)();
      };

      GenerationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GenerationService,
        factory: GenerationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, {
          onStagnation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-snotify */
      "90Zs");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components */
      "lbq7");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: 'SnotifyToastConfig',
          useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["ToastDefaults"]
        }, ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services__WEBPACK_IMPORTED_MODULE_4__["GenerationService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["FrameComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["FrameComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyModule"]],
            providers: [{
              provide: 'SnotifyToastConfig',
              useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["ToastDefaults"]
            }, ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services__WEBPACK_IMPORTED_MODULE_4__["GenerationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lbq7":
    /*!*************************************!*\
      !*** ./src/app/components/index.ts ***!
      \*************************************/

    /*! exports provided: FrameComponent */

    /***/
    function lbq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./frame */
      "pRBW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
        return _frame__WEBPACK_IMPORTED_MODULE_0__["FrameComponent"];
      }); // export * from './pane';

      /***/

    },

    /***/
    "o0su":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: MAX_INTENSITY, MIN_INTENSITY, GenerationService */

    /***/
    function o0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _generation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./generation.service */
      "WI6b");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MAX_INTENSITY", function () {
        return _generation_service__WEBPACK_IMPORTED_MODULE_0__["MAX_INTENSITY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MIN_INTENSITY", function () {
        return _generation_service__WEBPACK_IMPORTED_MODULE_0__["MIN_INTENSITY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GenerationService", function () {
        return _generation_service__WEBPACK_IMPORTED_MODULE_0__["GenerationService"];
      });
      /***/

    },

    /***/
    "pRBW":
    /*!*******************************************!*\
      !*** ./src/app/components/frame/index.ts ***!
      \*******************************************/

    /*! exports provided: FrameComponent */

    /***/
    function pRBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./frame.component */
      "rhaZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
        return _frame_component__WEBPACK_IMPORTED_MODULE_0__["FrameComponent"];
      });
      /***/

    },

    /***/
    "rhaZ":
    /*!*****************************************************!*\
      !*** ./src/app/components/frame/frame.component.ts ***!
      \*****************************************************/

    /*! exports provided: FrameComponent */

    /***/
    function rhaZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FrameComponent", function () {
        return FrameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "stagnation": a0,
          "running": a1,
          "alive": a2
        };
      };

      function FrameComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrameComponent_div_0_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var cell_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.cellClicked(cell_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cell_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.cellSize + "px")("height", ctx_r2.cellSize + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx_r2.stagnation, ctx_r2.running, cell_r3.alive));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "stagnation": a0
        };
      };

      function FrameComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FrameComponent_div_0_div_1_Template, 1, 9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r0.stagnation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r1);
        }
      }

      var FrameComponent = /*#__PURE__*/function () {
        function FrameComponent(generationService) {
          _classCallCheck(this, FrameComponent);

          this.generationService = generationService;
          this.nCols = 35;
          this.nRows = 17;
          this.cellSize = 15;
          this.duration = 0.5;
        }

        _createClass(FrameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cells = this.generationService.createInitalGrid(this.nRows, this.nCols);
            this.generationService.onStagnation.subscribe(function () {
              _this.stagnation = true;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tickSub && !this.tickSub.closed) this.tickSub.unsubscribe();
          }
        }, {
          key: "run",
          value: function run() {
            var _this2 = this;

            this.running = true;
            this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(this.duration * 300);
            this.tickSub = this.timer.subscribe(function () {
              _this2.cells = _this2.generationService.nextGeneration(_this2.cells);
            });
          }
        }, {
          key: "pause",
          value: function pause() {
            this.running = false;
            this.tickSub.unsubscribe();
          }
        }, {
          key: "restart",
          value: function restart() {
            this.stagnation = false;
            this.tickSub.unsubscribe();
            this.cells = this.generationService.createInitalGrid(this.nRows, this.nCols);
          }
        }, {
          key: "cellClicked",
          value: function cellClicked(cell) {
            this.stagnation = false;
            this.generationService.resetStagnation();
            cell.alive = !cell.alive;
          }
        }]);

        return FrameComponent;
      }();

      FrameComponent.ɵfac = function FrameComponent_Factory(t) {
        return new (t || FrameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["GenerationService"]));
      };

      FrameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FrameComponent,
        selectors: [["gol-frame"]],
        inputs: {
          nCols: "nCols",
          nRows: "nRows",
          cellSize: "cellSize",
          duration: "duration"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "frame-row", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "frame-row", 3, "ngClass"], ["class", "frame-cell", 3, "ngClass", "width", "height", "click", 4, "ngFor", "ngForOf"], [1, "frame-cell", 3, "ngClass", "click"]],
        template: function FrameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FrameComponent_div_0_Template, 2, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cells);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["[_nghost-%COMP%] {\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.frame-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  background-color: #1d1d1d !important;\n  border-style: solid;\n  border-color: #666;\n  border-width: 0 1px;\n}\n\n.frame-row[_ngcontent-%COMP%]:first-child {\n  border-top-width: 1px;\n}\n\n.frame-row[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 1px;\n}\n\n.frame-cell[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  margin: 1px;\n}\n\n.frame-cell[_ngcontent-%COMP%]:hover {\n  border-color: gray;\n  border-style: dotted;\n}\n\n.alive[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.alive.stagnation[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcmFtZS9mcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFwQlc7RUFxQlgsbUJBQUE7QUFMSjs7QUFPSTtFQUNJLHFCQUFBO0FBTFI7O0FBUUk7RUFDSSx3QkFBQTtBQU5SOztBQVVBO0VBQ0ksNkJBQUE7RUFDQSxXQS9CTztBQXdCWDs7QUFVQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJLHVCQTFDUztBQW1DYjs7QUFRSTtFQUNJLHFCQTNDVztBQXFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZyYW1lL2ZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlci1jb2xvcjogIzY2NjtcbiRjZWxsLWNvbG9yOiB3aGl0ZTtcbiRzdGFnbmF0aW9uLWNvbG9yOiByZWQ7XG4kY2VsbC1nYXA6IDFweDtcblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZyYW1lLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQgIWltcG9ydGFudDtcblxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci13aWR0aDogMCAxcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICB9XG59XG5cbi5mcmFtZS1jZWxsIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46ICRjZWxsLWdhcDtcbn1cblxuLmZyYW1lLWNlbGw6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbn1cblxuLmFsaXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2VsbC1jb2xvcjtcbiAgICAmLnN0YWduYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhZ25hdGlvbi1jb2xvcjtcbiAgICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'gol-frame',
            templateUrl: './frame.component.html',
            styleUrls: ['./frame.component.scss']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_2__["GenerationService"]
          }];
        }, {
          nCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cellSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map