import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { HistoryPage } from '../history/history';
import { StoredDataProvider } from '../../providers/stored-data/stored-data';
import { WeatherProvider } from '../../providers/weather/weather';
import { NewsProvider} from '../../providers/news/news';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // weather variable used to display info in home.html
  validCityFound: boolean = false;
  city: string = undefined;
  icon: string = undefined;
  country: string = undefined;
  weatherDescription: string;
  weatherMain: string;
  weatherIcon: string;
  temperature: number;
  feelsLike: number;

  // news variables used to display info in home.html
  totalStories: string = undefined;
  articles: object[] = undefined;
  showNews: boolean = false;
  disableNewsButton: boolean = true;

  // history variables -- boolean to display the "extra functionality" history button
  disableHistoryButton: boolean = true;

  // constructor
  constructor(public navCtrl: NavController,
    public storedDataProvider: StoredDataProvider,
    public weatherProvider: WeatherProvider,
    public newsProvider: NewsProvider
    ) {
    }

  // push/open the settings page
  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  // push/open the history page -- this is an added feature
  openHistoryPage(){
    this.navCtrl.push(HistoryPage);
  }

  // every time page is loaded delegate calls to other subroutines
  // to load various parts of page
  ionViewWillEnter(){
    this.loadPage()
  }

  // main routine to get settings, then the weather, then the news
  loadPage(){

    // always disable the news button initially
    this.showNews = false;
    this.validCityFound = false;

    // get the settings observable -- will try to retrieve units and city from persistent storage
    let settingsObservable = Observable.fromPromise(this.storedDataProvider.getSettings());

    // subscribe to the settings
    settingsObservable.subscribe(
      (settings) => {

        // if the settings are null set everything to invalid values
        if (settings == null){
          this.setInValidWeatherVariables();
          this.setInValidNewsVariables();
          this.disableHistoryButton = true;
        }

        // else try to get the weather, only if the city is not undefined
        else{

          // if the city is defined (i.e. a string), then build
          // an observable to subscribe to, only update weather data and subscribe
          // to news stories if it is a valid http response
          if(settings['city'] != undefined){

            // set a units variable
            let units = settings['units'];

            // capitalize city if not defined
            this.city = settings['city'];
            this.city = this.city[0].toUpperCase() + this.city.substr(1).toLowerCase();

            // build the weather observable before subscribing
            this.weatherProvider.buildWeatherObservable(this.city, units);

            // subscribe to weather observable
            this.weatherProvider.weatherObservable.subscribe(
              (weatherData) => {

                // if the weatherData is a string then there has been a HTTP GET error
                // reset all the weather and news variables
                // and set the units to the current units
                // and set the city to an undefined city
                // the app will also reset the city and units stored in persistent storage
                // to a previously valid city, and the current units
                if(typeof(weatherData) === 'string'){
                  this.validCityFound = false;
                  this.setLastValidSearchResult();
                }
                // else update the weather variables and get the news
                else{

                  this.validCityFound = true;

                  // update weather variables by piping in the dictionary object retrieved
                  // from the weather API
                  this.setValidWeatherVariables(weatherData)

                  // get the news
                  this.newsProvider.buildNewsObservable(this.country)
                  this.newsProvider.newsObservable.subscribe(

                    (newsData) => {

                      // if the newsData is a string then there has been a HTTP GET error
                      // and set the city to an undefined city
                      if(typeof(newsData) === 'string'){
                        this.totalStories = "Error retrieving news data";
                        this.articles = undefined;
                      }
                      else{
                        this.totalStories = newsData['totalResults'];
                        this.articles = newsData['articles'];
                      }

                      // set variables which render news on page
                      this.disableNewsButton = false;
                      this.showNews = false;

                      // add the weather+news data to history
                      let newsAndWeather: object = {"units": units, "weatherIcon": this.weatherIcon, 
                      "weatherMain": this.weatherMain, "temperature": this.temperature,
                      "totalStories": this.totalStories, "articles": this.articles};
                      this.storedDataProvider.addWeatherAndNewsToSessionHistory(this.city, newsAndWeather);
                      
                      // enable the history button
                      this.disableHistoryButton = false;
                    }
                    );
                }
              }
            );
          } // end if loop
        } // end else loop
      }
    ); // end data subscription
  }

  // sets the city and units from the last valid search result
  // as the city and units in persistent storage i.e. in the Settings page
  setLastValidSearchResult(){

    // set some default weather and news variables
    this.setInValidWeatherVariables();
    this.setInValidNewsVariables();

    // get data from history
    let historyObservable = Observable.fromPromise(this.storedDataProvider.getHistory());
    historyObservable.subscribe(data => {

      // if there is data in history, then load the last city and units
      if(data != null){
        let lastCity = data['cities'][0]
        let lastCityUnits = data['cityData'][lastCity]['units'];
        this.storedDataProvider.addKeyValuePair("settings", {"units": lastCityUnits, "city": lastCity});
      }
      // else set defaults
      else{
        this.storedDataProvider.addKeyValuePair("settings", {"units": "metric", "city": undefined});
      }
    });
  }

  // resets the main variables which show the weather data
  setInValidWeatherVariables(){
    this.city = undefined;
    this.country = undefined;
    this.weatherDescription = undefined;
    this.weatherMain = undefined;
    this.weatherIcon = undefined
    this.temperature = undefined;
    this.feelsLike = undefined;
  }

  // updates the main variables which show the weather data
  setValidWeatherVariables(weatherData){
    this.weatherMain = weatherData['weather'][0]['main'];
    this.weatherDescription = weatherData['weather'][0]['description'];
    this.temperature = weatherData['main']['temp'];
    this.feelsLike = weatherData['main']['feels_like'];
    this.country = weatherData['sys']['country'];
    this.weatherIcon = this.weatherProvider.getIcon(weatherData['weather'][0]['icon']);
  }

  // resets the news variables 
  setInValidNewsVariables(){
    this.disableNewsButton = true;
    this.showNews = false;
    this.totalStories = undefined;
    this.articles = undefined;
  }

  // simple boolean switch
  showArticles(){
      this.showNews = !this.showNews;
  }


}
