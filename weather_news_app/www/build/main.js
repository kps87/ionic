webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stored_data_stored_data__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryPage = /** @class */ (function () {
    // constructor
    function HistoryPage(navCtrl, navParams, storedDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storedDataProvider = storedDataProvider;
        this.cities = [];
        this.disableButton = false;
    }
    // delegate to other methods when page loads
    HistoryPage.prototype.ionViewDidLoad = function () {
        this.loadHistory();
    };
    // function which loads history from persistent storage
    HistoryPage.prototype.loadHistory = function () {
        var _this = this;
        var historyObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storedDataProvider.getHistory());
        historyObservable.subscribe(function (data) {
            if (data == null) {
                _this.cityData = undefined;
                _this.cities = [];
            }
            else {
                _this.cities = data['cities'];
                _this.cityData = data['cityData'];
            }
        });
    };
    // clear the history and disable the button
    HistoryPage.prototype.clearHistory = function () {
        var _this = this;
        var promise = this.storedDataProvider.storage.clear();
        promise.then(function () {
            _this.loadHistory();
            _this.disableButton = true;
        })
            .catch(function () { return _this.loadHistory(); });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/history/history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Weather and News History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Enter city information -->\n  <div *ngIf="cities != undefined">\n\n    <!-- clear history button, calls user-requested save  -->\n    <button ion-button full [disabled]="disableButton" (click)="clearHistory()">Clear History</button>\n\n    <!-- Loop over data for each city -->\n    <div *ngFor="let city of cities">\n\n      <!-- Create a card for each location -->\n      <ion-card>\n\n        <!-- weather content goes in the header -->\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="cityData[city].weatherIcon"/>\n          </ion-avatar>\n          <h1>City: {{city}} </h1>\n          <p>Temperature: {{cityData[city].temperature}}</p>\n          <p>(Unit: {{cityData[city].units}}) {{cityData[city].weatherMain}}</p>\n        </ion-item>\n\n        <!-- set the news content of the card in the body -->\n        <ion-card-content>\n\n          <!-- iterate over articles -->\n          <div *ngFor="let article of cityData[city].articles">\n            <ion-item>\n              <ion-avatar item-start>\n                <img [src]="article.urlToImage" alt="Image not found">\n              </ion-avatar>\n              <a [href]="article.url" target="_blank">\n                <p>{{article.title}}</p>\n              </a>\n            </ion-item>\n          </div>          \n\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_stored_data_stored_data__["a" /* StoredDataProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stored_data_stored_data__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    // constructor
    function SettingsPage(navCtrl, navParams, storedDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storedDataProvider = storedDataProvider;
        // variables
        this.units = "metric"; // initialize as undefined, but get from oldUnits variable or persistent storage
        this.savedUnits = "metric"; // a tempororary variable to backup the previously saved units should the user not save their settings
        this.city = undefined; // undefined, set to default value of Galway if user does not enter a city
        this.savedCity = undefined; // a tempororary variable to backup the previously saved city should the user not save their settings
        this.requestedSave = false; // boolean switch which controls whether to save user input or not
    }
    // called every time the view is navigated to
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // set to false every time page is loaded
        this.requestedSave = false;
        // get the settings from the stored data provider (persistent memory)
        this.storedDataProvider.getSettings().then(function (settings) {
            _this.savedCity = settings['city'];
            _this.savedUnits = settings['units'];
            _this.units = settings['units'];
            _this.city = settings['city'];
        })
            .catch(function () {
            _this.city = _this.savedCity;
            _this.units = _this.savedUnits;
        });
    };
    // saves the settings based on user request
    SettingsPage.prototype.save = function () {
        this.requestedSave = true;
        this.navCtrl.pop();
    };
    // on exit -- update the city and units that are in storage
    SettingsPage.prototype.ionViewWillLeave = function () {
        // if save was requested then update the city and units
        if (this.requestedSave == true) {
            // sanitize any user input for the city
            // don't allow any empty strings through -- default to savedCity if
            // user input is blank
            if (this.city != undefined) {
                var temp = this.city.replace(/\s+/g, "");
                if (temp.length == 0) {
                    this.city = undefined;
                }
            }
            // only use the default city if the user does not input a city
            // and there was no city in persistent storage
            if (this.city == undefined && this.savedCity == undefined) {
                this.savedCity = "Galway";
            }
            else if (this.city != undefined) {
                this.savedCity = this.city;
            }
            // always update the units when save is requested
            this.savedUnits = this.units;
        }
        else {
            this.city = this.savedCity;
            this.units = this.savedUnits;
        }
        // add city and units to persistent storage
        this.storedDataProvider.addKeyValuePair("settings", { "units": this.savedUnits, "city": this.savedCity });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Enter city information -->\n  <h1 class="title">City</h1>\n    <ion-item id="rounded">\n      <ion-input type="text" [(ngModel)]="city"></ion-input>\n    </ion-item>\n\n  <!-- print a header -->\n  <h1 class="title">Settings</h1>\n  <br>\n\n  <!-- Select units -->\n  <p>Unit Selection:</p>\n  <ion-list radio-group [(ngModel)]="units">\n\n    <ion-item>\n      <ion-label>Standard</ion-label>\n      <ion-radio value="standard"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Metric</ion-label>\n      <ion-radio value="metric"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Imperial</ion-label>\n      <ion-radio value="imperial"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <!-- save button, calls user-requested save  -->\n  <button ion-button (click)="save()">Save Settings</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_stored_data_stored_data__["a" /* StoredDataProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/history/history.module": [
		283,
		1
	],
	"../pages/settings/settings.module": [
		284,
		0
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_stored_data_stored_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_weather_weather__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_news_news__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
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
    // constructor
    function HomePage(navCtrl, storedDataProvider, weatherProvider, newsProvider) {
        this.navCtrl = navCtrl;
        this.storedDataProvider = storedDataProvider;
        this.weatherProvider = weatherProvider;
        this.newsProvider = newsProvider;
        // weather variable used to display info in home.html
        this.validCityFound = false;
        this.city = undefined;
        this.icon = undefined;
        this.country = undefined;
        // news variables used to display info in home.html
        this.totalStories = undefined;
        this.articles = undefined;
        this.showNews = false;
        this.disableNewsButton = true;
        // history variables -- boolean to display the "extra functionality" history button
        this.disableHistoryButton = true;
    }
    // push/open the settings page
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    // push/open the history page -- this is an added feature
    HomePage.prototype.openHistoryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */]);
    };
    // every time page is loaded delegate calls to other subroutines
    // to load various parts of page
    HomePage.prototype.ionViewWillEnter = function () {
        this.loadPage();
    };
    // main routine to get settings, then the weather, then the news
    HomePage.prototype.loadPage = function () {
        var _this = this;
        // always disable the news button initially
        this.showNews = false;
        this.validCityFound = false;
        // get the settings observable -- will try to retrieve units and city from persistent storage
        var settingsObservable = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(this.storedDataProvider.getSettings());
        // subscribe to the settings
        settingsObservable.subscribe(function (settings) {
            // if the settings are null set everything to invalid values
            if (settings == null) {
                _this.setInValidWeatherVariables();
                _this.setInValidNewsVariables();
                _this.disableHistoryButton = true;
            }
            else {
                // if the city is defined (i.e. a string), then build
                // an observable to subscribe to, only update weather data and subscribe
                // to news stories if it is a valid http response
                if (settings['city'] != undefined) {
                    // set a units variable
                    var units_1 = settings['units'];
                    // capitalize city if not defined
                    _this.city = settings['city'];
                    _this.city = _this.city[0].toUpperCase() + _this.city.substr(1).toLowerCase();
                    // build the weather observable before subscribing
                    _this.weatherProvider.buildWeatherObservable(_this.city, units_1);
                    // subscribe to weather observable
                    _this.weatherProvider.weatherObservable.subscribe(function (weatherData) {
                        // if the weatherData is a string then there has been a HTTP GET error
                        // reset all the weather and news variables
                        // and set the units to the current units
                        // and set the city to an undefined city
                        // the app will also reset the city and units stored in persistent storage
                        // to a previously valid city, and the current units
                        if (typeof (weatherData) === 'string') {
                            _this.validCityFound = false;
                            _this.setLastValidSearchResult();
                        }
                        else {
                            _this.validCityFound = true;
                            // update weather variables by piping in the dictionary object retrieved
                            // from the weather API
                            _this.setValidWeatherVariables(weatherData);
                            // get the news
                            _this.newsProvider.buildNewsObservable(_this.country);
                            _this.newsProvider.newsObservable.subscribe(function (newsData) {
                                // if the newsData is a string then there has been a HTTP GET error
                                // and set the city to an undefined city
                                if (typeof (newsData) === 'string') {
                                    _this.totalStories = "Error retrieving news data";
                                    _this.articles = undefined;
                                }
                                else {
                                    _this.totalStories = newsData['totalResults'];
                                    _this.articles = newsData['articles'];
                                }
                                // set variables which render news on page
                                _this.disableNewsButton = false;
                                _this.showNews = false;
                                // add the weather+news data to history
                                var newsAndWeather = { "units": units_1, "weatherIcon": _this.weatherIcon,
                                    "weatherMain": _this.weatherMain, "temperature": _this.temperature,
                                    "totalStories": _this.totalStories, "articles": _this.articles };
                                _this.storedDataProvider.addWeatherAndNewsToSessionHistory(_this.city, newsAndWeather);
                                // enable the history button
                                _this.disableHistoryButton = false;
                            });
                        }
                    });
                } // end if loop
            } // end else loop
        }); // end data subscription
    };
    // sets the city and units from the last valid search result
    // as the city and units in persistent storage i.e. in the Settings page
    HomePage.prototype.setLastValidSearchResult = function () {
        var _this = this;
        // set some default weather and news variables
        this.setInValidWeatherVariables();
        this.setInValidNewsVariables();
        // get data from history
        var historyObservable = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].fromPromise(this.storedDataProvider.getHistory());
        historyObservable.subscribe(function (data) {
            // if there is data in history, then load the last city and units
            if (data != null) {
                var lastCity = data['cities'][0];
                var lastCityUnits = data['cityData'][lastCity]['units'];
                _this.storedDataProvider.addKeyValuePair("settings", { "units": lastCityUnits, "city": lastCity });
            }
            else {
                _this.storedDataProvider.addKeyValuePair("settings", { "units": "metric", "city": undefined });
            }
        });
    };
    // resets the main variables which show the weather data
    HomePage.prototype.setInValidWeatherVariables = function () {
        this.city = undefined;
        this.country = undefined;
        this.weatherDescription = undefined;
        this.weatherMain = undefined;
        this.weatherIcon = undefined;
        this.temperature = undefined;
        this.feelsLike = undefined;
    };
    // updates the main variables which show the weather data
    HomePage.prototype.setValidWeatherVariables = function (weatherData) {
        this.weatherMain = weatherData['weather'][0]['main'];
        this.weatherDescription = weatherData['weather'][0]['description'];
        this.temperature = weatherData['main']['temp'];
        this.feelsLike = weatherData['main']['feels_like'];
        this.country = weatherData['sys']['country'];
        this.weatherIcon = this.weatherProvider.getIcon(weatherData['weather'][0]['icon']);
    };
    // resets the news variables 
    HomePage.prototype.setInValidNewsVariables = function () {
        this.disableNewsButton = true;
        this.showNews = false;
        this.totalStories = undefined;
        this.articles = undefined;
    };
    // simple boolean switch
    HomePage.prototype.showArticles = function () {
        this.showNews = !this.showNews;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/home/home.html"*/'<ion-header>\n\n  <!-- navbar settings  -->\n  <ion-navbar>\n\n    <!-- title = studend id -->\n    <ion-title>\n      G00221349\n    </ion-title>\n\n    <!-- add settings button to rhs of navbar -->\n    <ion-buttons end>\n      <button ion-button icon-only [disabled]="disableHistoryButton" (click)="openHistoryPage()">\n        <ion-icon name="cloud-outline"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="openSettingsPage()">\n        <ion-icon name="ios-settings" md="md-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h1 class="title">Weather for {{city}}</h1>\n  <h2 *ngIf="validCityFound == false then invalidWeatherTemplate else validWeatherTemplate">City not found</h2>\n\n  <ng-template #invalidWeatherTemplate>\n    <br>\n    <h2>City not found</h2>\n    <p>({{weatherDescription}})</p>\n    <h2>Temperature: {{temperature}}</h2>\n    <p>(Feels like: {{feelsLike}})</p>\n  </ng-template>\n  \n  <ng-template #validWeatherTemplate>\n    <div *ngIf="weatherIcon != undefined">\n      <img [src]="weatherIcon">\n    </div>\n\n    <h2>{{weatherMain}}</h2>\n    <p>({{weatherDescription}})</p>\n    <h2>Temperature: {{temperature}}</h2>\n    <p>(Feels like: {{feelsLike}})</p>\n  </ng-template>\n  <hr>\n\n  <!-- button which controls news  -->\n  <button ion-button [disabled]="disableNewsButton" (click)="showArticles()">News</button>\n\n  <!-- if showNews boolean is defined, show the total news stories, and loop over each article to print its data -->\n  <div *ngIf="showNews">\n\n    <!-- print total number of stories -->\n    <br>\n    <h2>Total News Stories from {{country}}: {{totalStories}}</h2>\n    <hr>\n    <br>\n\n    <!-- loop over articles -->\n    <div *ngFor="let article of articles">\n\n      <!-- show image -->\n      <a [href]="article.url" target="_blank">\n        <img [src]="article.urlToImage" width="250" alt="Image not found">\n      </a>\n      <!-- show article title -->\n      <a [href]="article.url" target="_blank">\n        <p>{{article.title}}</p>\n      </a>\n      <!-- show article descriptions -->\n      <a [href]="article.url" target="_blank">\n        <p>{{article.description}}</p>\n      </a>\n    <hr>\n    </div>\n    <hr>\n\n  </div>\n  <hr>\n\n</ion-content>\n'/*ion-inline-end:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_stored_data_stored_data__["a" /* StoredDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_weather_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_news_news__["a" /* NewsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stored_data_stored_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeatherProvider = /** @class */ (function () {
    // constructor
    function WeatherProvider(http, storedDataProvider) {
        this.http = http;
        this.storedDataProvider = storedDataProvider;
        // storing variables
        this.baseUrl = "http://api.openweathermap.org/data/2.5/weather?q="; // base url, other data appended
        this.key = "8d4a6498e1c3e2acb3cf884378c0fd06"; // api key
    }
    // creates a weather observer which can be subscribed to by other pages
    WeatherProvider.prototype.buildWeatherObservable = function (city, units) {
        var _this = this;
        // set the city, units and build the url for the http get request
        this.city = city;
        this.units = units;
        this.buildUrl();
        // create an observable that can be subscribed to later, handle any errors
        this.weatherObservable = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.url).subscribe(function (response) { return observer.next(response); }, function (error) { return observer.next("Error " + error['status'] + " likely invalid city or units"); }, function () { return observer.complete(); });
        });
    };
    // builds the url for the api call
    WeatherProvider.prototype.buildUrl = function () {
        this.url = this.baseUrl + this.city + "&units=" + this.units + "&appid=" + this.key;
    };
    // gets the weather icon to be displayed alongisde alphanumeric data
    WeatherProvider.prototype.getIcon = function (icon) {
        if (icon != undefined) {
            var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            return iconurl;
        }
        return undefined;
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__stored_data_stored_data__["a" /* StoredDataProvider */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NewsProvider = /** @class */ (function () {
    // constructor
    function NewsProvider(http) {
        this.http = http;
        // variables
        this.baseUrl = "https://newsapi.org/v2/top-headlines?country=";
        this.key = "4523324c4c624788994464681e0eeea4";
        this.country = undefined; // default country is undefined
        this.pageSize = "5"; // default pages is 5
    }
    // method which builds a news observable from which
    // data can be obtained
    NewsProvider.prototype.buildNewsObservable = function (country) {
        var _this = this;
        // update the country and build the url for the HTTP get request
        this.country = country;
        this.buildUrl();
        // create an observable that can be subscribed to later
        // handle any errors with a message
        this.newsObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.url).subscribe(function (response) { return observer.next(response); }, function (error) { return observer.next("Error " + error['status'] + " likely invalid country, page size, or api key"); }, function () { return observer.complete(); });
        });
    };
    // build the url for the http GET request
    NewsProvider.prototype.buildUrl = function () {
        this.url = this.baseUrl + this.country + "&pageSize=" + this.pageSize + "&apiKey=" + this.key;
    };
    NewsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NewsProvider);
    return NewsProvider;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_history_history__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_weather_weather__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_stored_data_stored_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_news_news__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_history_history__["a" /* HistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_weather_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_news_news__["a" /* NewsProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_stored_data_stored_data__["a" /* StoredDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ksomers/projects/gmit/MAD/project/G00221349/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoredDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoredDataProvider = /** @class */ (function () {
    // constructor
    function StoredDataProvider(storage) {
        this.storage = storage;
    }
    // sets a key value pair in session storage
    StoredDataProvider.prototype.addKeyValuePair = function (key, value) {
        return this.storage.set(key, value);
    };
    // gets a key value pair from session storage
    StoredDataProvider.prototype.getSettings = function () {
        var _this = this;
        return this.storage.ready().then(function () { return _this.storage.get("settings"); }).catch(function () { return _this.storage.get("settings"); });
    };
    // function which returns a promise based on an attempt to get
    // the "history" key from storage -- used to build the 'history' page which is an added feature
    StoredDataProvider.prototype.getHistory = function () {
        var _this = this;
        return this.storage.ready().then(function () { return _this.storage.get("history"); }).catch(function () { return _this.storage.get("history"); });
    };
    // adds data to a history so that 'history' page feature can be implemented
    StoredDataProvider.prototype.addWeatherAndNewsToSessionHistory = function (city, newsAndWeater) {
        var _this = this;
        // capitalize the city
        var cityCapitalize = city[0].toUpperCase() + city.substr(1).toLowerCase();
        var historyObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.getHistory());
        // this.storage.set(city.toLowerCase(), newsAndWeater);
        historyObservable.subscribe(function (data) {
            // if there is not data in the history, then just add this city
            if (data == null) {
                data = {};
                data['cityData'] = {};
                data['cities'] = [cityCapitalize];
                data['cityData'][cityCapitalize] = newsAndWeater;
            }
            else {
                // if city is in array remove it, then add it to the beginning of the list
                var index = data['cities'].indexOf(cityCapitalize);
                if (index > -1) {
                    data['cities'].splice(index, 1);
                }
                data['cities'].unshift(cityCapitalize);
                // overwrite the city data
                data['cityData'][cityCapitalize] = newsAndWeater;
            }
            // add the history to persistent storage
            _this.addKeyValuePair("history", data);
        });
    };
    StoredDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StoredDataProvider);
    return StoredDataProvider;
}());

//# sourceMappingURL=stored-data.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map