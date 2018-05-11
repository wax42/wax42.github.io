webpackJsonp([8],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmistratifPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdmistratifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmistratifPage = /** @class */ (function () {
    function AdmistratifPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdmistratifPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdmistratifPage');
    };
    AdmistratifPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admistratif',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/admistratif/admistratif.html"*/'<ion-header>\n\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n    <ion-title>admistratif</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/admistratif/admistratif.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdmistratifPage);
    return AdmistratifPage;
}());

//# sourceMappingURL=admistratif.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParamPage = /** @class */ (function () {
    function ParamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isDisabled = true;
    }
    ParamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParamPage');
    };
    ParamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-param',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/param/param.html"*/'<ion-header>\n\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n    <ion-title>Paramètres</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n  <ion-list radio-group>\n    <ion-list-header>\n      Auto-Lock\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Enable "Never"</ion-label>\n      <ion-toggle (ionChange)="isDisabled = !isDisabled"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>1 Minute</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>2 Minutes</ion-label>\n      <ion-radio checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>5 Minutes</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Never</ion-label>\n      <ion-radio [disabled]="isDisabled"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list radio-group>\n    <ion-list-header>\n      Silence\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Always</ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Only while phone is locked</ion-label>\n      <ion-radio checked="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/param/param.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ParamPage);
    return ParamPage;
}());

//# sourceMappingURL=param.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartenairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PartenairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartenairePage = /** @class */ (function () {
    function PartenairePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PartenairePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartenairePage');
    };
    PartenairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partenaire',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/partenaire/partenaire.html"*/'<!--\n  Generated template for the PartenairePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n    <ion-title>Partenaire</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n      <ion-label>2 Minutes</ion-label>\n      <ion-radio checked></ion-radio>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/partenaire/partenaire.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PartenairePage);
    return PartenairePage;
}());

//# sourceMappingURL=partenaire.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsPage = /** @class */ (function () {
    function StatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatsPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.barChart = _this.getBarChart();
            _this.doughnutChart = _this.getDoughnutChart();
            _this.halfDoughnutChart = _this.getHalfDoughnutChart();
        }, 150);
        setTimeout(function () {
            _this.lineChart = _this.getLineChart();
            _this.radarChart = _this.getRadarChart();
            _this.polarAreaChart = _this.getPolarAreaChart();
        }, 250);
        setTimeout(function () {
            _this.bubbleChart = _this.getBubbleChart();
            _this.mixedChart = _this.getMixedChart();
            _this.pieChart = _this.getPieChart();
        }, 350);
    };
    StatsPage.prototype.updateData = function () {
        // After instantiating your chart, its data is accessible and
        // can be changed anytime with the function update().
        // It takes care of everything and even redraws the animations :D
        this.pieChart.data.datasets[0].data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000];
        this.pieChart.update();
    };
    StatsPage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    /*
    *  By specifying different types inside each dataset
    *  it's possible to have multiple bar types mixed into one.
    */
    StatsPage.prototype.getMixedChart = function () {
        var data = {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Bar Component',
                    data: [10, 20, 30],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
                {
                    type: 'line',
                    label: 'Line Component',
                    data: [30, 20, 10],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                }
            ]
        };
        return this.getChart(this.mixedCanvas.nativeElement, 'bar', data);
    };
    StatsPage.prototype.getPieChart = function () {
        var data = {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }
            ]
        };
        return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
    };
    StatsPage.prototype.getPolarAreaChart = function () {
        var data = {
            datasets: [{
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                    label: 'My dataset' // for the legend
                }],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        var options = {
            elements: {
                arc: {
                    borderColor: '#000000'
                }
            }
        };
        return this.getChart(this.polarCanvas.nativeElement, 'polarArea', data, options);
    };
    StatsPage.prototype.getBubbleChart = function () {
        var data = {
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        { x: 20, y: 30, r: 15 },
                        { x: 40, y: 10, r: 10 },
                    ],
                    backgroundColor: '#FF6384',
                    hoverBackgroundColor: '#FF6384',
                }
            ]
        };
        var options = {
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        return this.getChart(this.bubbleCanvas.nativeElement, 'bubble', data, options);
    };
    StatsPage.prototype.getRadarChart = function () {
        var data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        var options = {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        };
        return this.getChart(this.radarCanvas.nativeElement, 'radar', data, options);
    };
    StatsPage.prototype.getDoughnutChart = function () {
        var data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
                }]
        };
        return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
    };
    StatsPage.prototype.getHalfDoughnutChart = function () {
        var data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
                }]
        };
        var options = {
            circumference: Math.PI,
            rotation: 1.0 * Math.PI
        };
        return this.getChart(this.halfDoughnutCanvas.nativeElement, 'doughnut', data, options);
    };
    StatsPage.prototype.getBarChart = function () {
        var data = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                    label: '# of Votes',
                    data: [22, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    StatsPage.prototype.getLineChart = function () {
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40],
                    spanGaps: false,
                },
                {
                    label: 'My Second dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(175,92,192,0.4)',
                    borderColor: 'rgba(31,156,156,1)',
                    borderCapStyle: 'butt',
                    borderDash: [5, 8],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(31,156,156,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(31,156,156,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [15, 39, 50, 81, 51, 55, 30],
                    spanGaps: false,
                }
            ]
        };
        return this.getChart(this.lineCanvas.nativeElement, 'line', data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('halfDoughnutCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "halfDoughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('radarCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "radarCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('polarCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "polarCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('bubbleCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "bubbleCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mixedCanvas'),
        __metadata("design:type", Object)
    ], StatsPage.prototype, "mixedCanvas", void 0);
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/stats/stats.html"*/'<ion-header>\n\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <button ion-button (click)="updateData()">Update Pie Chart Data</button>\n    <ion-card>\n      <ion-card-header>\n        Pie Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #pieCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Half Doughnut Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #halfDoughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Line Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Radar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #radarCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Polar Area Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #polarCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Bubble Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #bubbleCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Mixed Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #mixedCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/stats/stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisibilitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VisibilitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisibilitePage = /** @class */ (function () {
    function VisibilitePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
        this.data = [
            {
                id: 'youtube',
                name: 'Youtube',
                symbol: 'youtube',
                rank: '1',
                price_usd: '13208.8',
                percent_change_1h: '1.54'
            },
            {
                id: 'twitter',
                name: 'Twitter',
                symbol: 'twitter',
                rank: '2',
                price_usd: '658.926',
                percent_change_1h: '2.42'
            }
        ];
    }
    VisibilitePage.prototype.precision = function (n, m) {
        return parseFloat(n).toFixed(m);
    };
    VisibilitePage.prototype.evolution = function (n) {
        return n > 0
            ? '<span>' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-up"></i></span>'
            : '<span class="red">' + parseFloat(n).toFixed(2) + '&nbsp;<i class="fa fa-caret-down"></i></span>';
    };
    VisibilitePage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    VisibilitePage.prototype.goToAccount = function () {
        alert('Account clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage.prototype.goToHome = function () {
        alert('Home clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage.prototype.goToCups = function () {
        alert('Cups clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage.prototype.goToLeaderboard = function () {
        alert('Leaderboard clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage.prototype.goToHelp = function () {
        alert('Help clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage.prototype.goToShop = function () {
        alert('Shop clicked.');
        this.togglePopupMenu();
    };
    VisibilitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visibilite',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/visibilite/visibilite.html"*/'\n<ion-header>\n\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n    <ion-title>Visibilite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="page-background">\n	<div class="welcome-header">\n    <div class="content">\n      <div class="title">Statistique</div>\n      <div class="subtitle">Find The latest info about You</div>\n    </div>\n    <button ion-fab color="dark" class="refresh"><ion-icon name="md-refresh"></ion-icon></button>\n  </div>\n	<div class="body" padding>\n	    <div class="currencies">\n	      <ion-row class="currency" *ngFor="let d of data">\n	        <ion-col class="image">\n	          <img src="{{\'assets/imgs/\'+d.symbol+\'.png\'}}" alt="">\n	        </ion-col>\n	        <ion-col col-4 class="text">\n	          <p class="rank">Rank {{d.rank}}</p>\n	          <p class="name">{{d.name}}</p>\n	        </ion-col>\n	        <ion-col col-4 class="text">\n	          <p class="usd">{{ precision(d.price_usd,1) }} $</p>\n	          <p class="evolution" [innerHtml]="evolution(d.percent_change_1h)"></p>\n	        </ion-col>\n	        <ion-col col-1>\n	          <span class="indicator"><ion-icon icon="md-arrow-dropright"></ion-icon></span>\n	        </ion-col>\n	      </ion-row>\n	    </div>\n	  </div>\n	<div class="popup-menu">\n		<div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n		<div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div>\n		<div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n			<div class="popup-menu-item" (click)="goToHome()">\n				<ion-icon name="home"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>HOME</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToCups()">\n				<ion-icon name="trophy"></ion-icon>\n				<span>CUPS</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToLeaderboard()">\n				<ion-icon name="podium"></ion-icon>\n				<ion-badge>10</ion-badge>\n				<span>LEADERBOARD</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToHelp()">\n				<ion-icon name="help"></ion-icon>\n				<span>HELP</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToAccount()">\n				<ion-icon name="person"></ion-icon>\n				<ion-badge>5</ion-badge>\n				<span>ACCOUNT</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToShop()">\n				<ion-icon name="cart"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>SHOP</span>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/visibilite/visibilite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], VisibilitePage);
    return VisibilitePage;
}());

//# sourceMappingURL=visibilite.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admistratif/admistratif.module": [
		459,
		7
	],
	"../pages/agenda/agenda.module": [
		460,
		1
	],
	"../pages/juridique/juridique.module": [
		461,
		0
	],
	"../pages/login/login.module": [
		462,
		6
	],
	"../pages/param/param.module": [
		463,
		5
	],
	"../pages/partenaire/partenaire.module": [
		464,
		4
	],
	"../pages/stats/stats.module": [
		465,
		3
	],
	"../pages/visibilite/visibilite.module": [
		466,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(menu, nav) {
        this.menu = menu;
        this.nav = nav;
        this.EtatUser = 'log';
    }
    // -------------  Declaration function ----------------
    HomePage.prototype.SignIn = function () {
        this.EtatUser = 'log';
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.menu.enable(true, 'menu1');
        this.menu.enable(false, 'menu2');
    };
    HomePage.prototype.SignUp = function () {
        this.EtatUser = 'nop';
        this.menu.enable(false, 'menu1');
        this.menu.enable(true, 'menu2');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n  			<ion-icon name="menu"></ion-icon>\n		</button>\n	<ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h3>Base: {{ (EtatUser == \'log\') ? \'OK\' : "You don\'t have an account yet? " }}</h3>\n  <button ion-button block color="secondary" (click)="SignIn()">Sign In</button>\n  <button ion-button block color="danger" (click)="SignUp()">Sign Up</button>\n  <button ion-button block color="dark">Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_param_param__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admistratif_admistratif__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_partenaire_partenaire__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_visibilite_visibilite__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_stats_stats__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { SideMenuPage } from '../pages/side-menu/side-menu';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_param_param__["a" /* ParamPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admistratif_admistratif__["a" /* AdmistratifPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_partenaire_partenaire__["a" /* PartenairePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visibilite_visibilite__["a" /* VisibilitePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_stats_stats__["a" /* StatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admistratif/admistratif.module#AdmistratifPageModule', name: 'AdmistratifPage', segment: 'admistratif', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/juridique/juridique.module#JuridiquePageModule', name: 'JuridiquePage', segment: 'juridique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/param/param.module#ParamPageModule', name: 'ParamPage', segment: 'param', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partenaire/partenaire.module#PartenairePageModule', name: 'PartenairePage', segment: 'partenaire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stats/stats.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visibilite/visibilite.module#VisibilitePageModule', name: 'VisibilitePage', segment: 'visibilite', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_param_param__["a" /* ParamPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_admistratif_admistratif__["a" /* AdmistratifPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_partenaire_partenaire__["a" /* PartenairePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_visibilite_visibilite__["a" /* VisibilitePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_stats_stats__["a" /* StatsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 170,
	"./af.js": 170,
	"./ar": 171,
	"./ar-dz": 172,
	"./ar-dz.js": 172,
	"./ar-kw": 173,
	"./ar-kw.js": 173,
	"./ar-ly": 174,
	"./ar-ly.js": 174,
	"./ar-ma": 175,
	"./ar-ma.js": 175,
	"./ar-sa": 176,
	"./ar-sa.js": 176,
	"./ar-tn": 177,
	"./ar-tn.js": 177,
	"./ar.js": 171,
	"./az": 178,
	"./az.js": 178,
	"./be": 179,
	"./be.js": 179,
	"./bg": 180,
	"./bg.js": 180,
	"./bm": 181,
	"./bm.js": 181,
	"./bn": 182,
	"./bn.js": 182,
	"./bo": 183,
	"./bo.js": 183,
	"./br": 184,
	"./br.js": 184,
	"./bs": 185,
	"./bs.js": 185,
	"./ca": 186,
	"./ca.js": 186,
	"./cs": 187,
	"./cs.js": 187,
	"./cv": 188,
	"./cv.js": 188,
	"./cy": 189,
	"./cy.js": 189,
	"./da": 190,
	"./da.js": 190,
	"./de": 191,
	"./de-at": 192,
	"./de-at.js": 192,
	"./de-ch": 193,
	"./de-ch.js": 193,
	"./de.js": 191,
	"./dv": 194,
	"./dv.js": 194,
	"./el": 195,
	"./el.js": 195,
	"./en-au": 196,
	"./en-au.js": 196,
	"./en-ca": 197,
	"./en-ca.js": 197,
	"./en-gb": 198,
	"./en-gb.js": 198,
	"./en-ie": 199,
	"./en-ie.js": 199,
	"./en-il": 200,
	"./en-il.js": 200,
	"./en-nz": 201,
	"./en-nz.js": 201,
	"./eo": 202,
	"./eo.js": 202,
	"./es": 203,
	"./es-do": 204,
	"./es-do.js": 204,
	"./es-us": 205,
	"./es-us.js": 205,
	"./es.js": 203,
	"./et": 206,
	"./et.js": 206,
	"./eu": 207,
	"./eu.js": 207,
	"./fa": 208,
	"./fa.js": 208,
	"./fi": 209,
	"./fi.js": 209,
	"./fo": 210,
	"./fo.js": 210,
	"./fr": 211,
	"./fr-ca": 212,
	"./fr-ca.js": 212,
	"./fr-ch": 213,
	"./fr-ch.js": 213,
	"./fr.js": 211,
	"./fy": 214,
	"./fy.js": 214,
	"./gd": 215,
	"./gd.js": 215,
	"./gl": 216,
	"./gl.js": 216,
	"./gom-latn": 217,
	"./gom-latn.js": 217,
	"./gu": 218,
	"./gu.js": 218,
	"./he": 219,
	"./he.js": 219,
	"./hi": 220,
	"./hi.js": 220,
	"./hr": 221,
	"./hr.js": 221,
	"./hu": 222,
	"./hu.js": 222,
	"./hy-am": 223,
	"./hy-am.js": 223,
	"./id": 224,
	"./id.js": 224,
	"./is": 225,
	"./is.js": 225,
	"./it": 226,
	"./it.js": 226,
	"./ja": 227,
	"./ja.js": 227,
	"./jv": 228,
	"./jv.js": 228,
	"./ka": 229,
	"./ka.js": 229,
	"./kk": 230,
	"./kk.js": 230,
	"./km": 231,
	"./km.js": 231,
	"./kn": 232,
	"./kn.js": 232,
	"./ko": 233,
	"./ko.js": 233,
	"./ky": 234,
	"./ky.js": 234,
	"./lb": 235,
	"./lb.js": 235,
	"./lo": 236,
	"./lo.js": 236,
	"./lt": 237,
	"./lt.js": 237,
	"./lv": 238,
	"./lv.js": 238,
	"./me": 239,
	"./me.js": 239,
	"./mi": 240,
	"./mi.js": 240,
	"./mk": 241,
	"./mk.js": 241,
	"./ml": 242,
	"./ml.js": 242,
	"./mn": 243,
	"./mn.js": 243,
	"./mr": 244,
	"./mr.js": 244,
	"./ms": 245,
	"./ms-my": 246,
	"./ms-my.js": 246,
	"./ms.js": 245,
	"./mt": 247,
	"./mt.js": 247,
	"./my": 248,
	"./my.js": 248,
	"./nb": 249,
	"./nb.js": 249,
	"./ne": 250,
	"./ne.js": 250,
	"./nl": 251,
	"./nl-be": 252,
	"./nl-be.js": 252,
	"./nl.js": 251,
	"./nn": 253,
	"./nn.js": 253,
	"./pa-in": 254,
	"./pa-in.js": 254,
	"./pl": 255,
	"./pl.js": 255,
	"./pt": 256,
	"./pt-br": 257,
	"./pt-br.js": 257,
	"./pt.js": 256,
	"./ro": 258,
	"./ro.js": 258,
	"./ru": 259,
	"./ru.js": 259,
	"./sd": 260,
	"./sd.js": 260,
	"./se": 261,
	"./se.js": 261,
	"./si": 262,
	"./si.js": 262,
	"./sk": 263,
	"./sk.js": 263,
	"./sl": 264,
	"./sl.js": 264,
	"./sq": 265,
	"./sq.js": 265,
	"./sr": 266,
	"./sr-cyrl": 267,
	"./sr-cyrl.js": 267,
	"./sr.js": 266,
	"./ss": 268,
	"./ss.js": 268,
	"./sv": 269,
	"./sv.js": 269,
	"./sw": 270,
	"./sw.js": 270,
	"./ta": 271,
	"./ta.js": 271,
	"./te": 272,
	"./te.js": 272,
	"./tet": 273,
	"./tet.js": 273,
	"./tg": 274,
	"./tg.js": 274,
	"./th": 275,
	"./th.js": 275,
	"./tl-ph": 276,
	"./tl-ph.js": 276,
	"./tlh": 277,
	"./tlh.js": 277,
	"./tr": 278,
	"./tr.js": 278,
	"./tzl": 279,
	"./tzl.js": 279,
	"./tzm": 280,
	"./tzm-latn": 281,
	"./tzm-latn.js": 281,
	"./tzm.js": 280,
	"./ug-cn": 282,
	"./ug-cn.js": 282,
	"./uk": 283,
	"./uk.js": 283,
	"./ur": 284,
	"./ur.js": 284,
	"./uz": 285,
	"./uz-latn": 286,
	"./uz-latn.js": 286,
	"./uz.js": 285,
	"./vi": 287,
	"./vi.js": 287,
	"./x-pseudo": 288,
	"./x-pseudo.js": 288,
	"./yo": 289,
	"./yo.js": 289,
	"./zh-cn": 290,
	"./zh-cn.js": 290,
	"./zh-hk": 291,
	"./zh-hk.js": 291,
	"./zh-tw": 292,
	"./zh-tw.js": 292
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 414;

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_param_param__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admistratif_admistratif__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_partenaire_partenaire__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_visibilite_visibilite__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_stats_stats__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { SideMenuPage } from '../pages/side-menu/side-menu';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Paramètres', component: __WEBPACK_IMPORTED_MODULE_6__pages_param_param__["a" /* ParamPage */] },
            { title: 'Administratif', component: __WEBPACK_IMPORTED_MODULE_7__pages_admistratif_admistratif__["a" /* AdmistratifPage */] },
            { title: 'Partenaire', component: __WEBPACK_IMPORTED_MODULE_8__pages_partenaire_partenaire__["a" /* PartenairePage */] },
            { title: 'Visibilite', component: __WEBPACK_IMPORTED_MODULE_9__pages_visibilite_visibilite__["a" /* VisibilitePage */] },
            { title: 'Statistique', component: __WEBPACK_IMPORTED_MODULE_10__pages_stats_stats__["a" /* StatsPage */] },
        ];
    }
    // -------------  Declaration function ----------------
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // -------------  Declaration function ----------------
    LoginPage.prototype.doConnection = function () {
        var var_email = this.connection_email;
        var var_pwd = this.connection_pwd;
        if (var_email == undefined || var_email == "") {
            alert("Please mention the email address");
            return;
        }
        if (this.validateEmail(var_email) == false) {
            alert("Invalid email address");
            this.connection_email = "";
            return;
        }
        if (var_pwd == undefined)
            var_pwd = '';
        if (this.Autentication_get_sessionId(var_email, var_pwd)) {
            //change page with param
            // this.navCtrl.push(PagePersonnellePage, {
            // 	firstPassed: var_email, secondPassed: var_pwd
            // });
            this.connection_email = '';
            this.connection_pwd = '';
            alert("connected /fake/");
        } //if (this.Autentication_get_sessionId())
    }; //doConnection
    LoginPage.prototype.MDPOublie = function () {
        alert("ok");
    }; //MDPOublie
    LoginPage.prototype.Autentication_get_sessionId = function (param_email, param_pwd) {
        //Serveur ?
        return (true);
    }; //Autentication_get_sessionId //export class HomePage
    LoginPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/vguerand/.npm-packages/base_0.01/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n	  <button ion-button menuToggle>\n			  <ion-icon name="menu"></ion-icon>\n	  </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n	  <ion-label color="primary" stacked>Email address :</ion-label>\n	  <ion-input id="inputEmail" [(ngModel)]="connection_email" type="email"></ion-input>\n	</ion-item>\n\n	<ion-item>\n	  <ion-label color="primary" stacked>Password :</ion-label>\n	  <ion-input id="inputPWD" [(ngModel)]="connection_pwd" type="password"></ion-input>\n	  </ion-item>\n	<br/>\n	  <button type="submit" ion-button full (click)="doConnection();">Connection</button>\n	  <button type="submit" ion-button full (Click)="PWDForgotten()">Password forgotten ?</button>\n</ion-content>\n'/*ion-inline-end:"/Users/vguerand/.npm-packages/base_0.01/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map