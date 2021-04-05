import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoredDataProvider } from '../stored-data/stored-data';
import 'rxjs/add/observable/fromPromise';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherProvider {

  // storing variables
  baseUrl: string = "http://api.openweathermap.org/data/2.5/weather?q="; // base url, other data appended
  key: string = "8d4a6498e1c3e2acb3cf884378c0fd06"; // api key
  city: string; // declare the city
  units: string; // declare the units
  url: string; // final url which is used to get weather -- constructed from other data
  weatherObservable: Observable<any>;

  // constructor
  constructor(public http: HttpClient,
    public storedDataProvider: StoredDataProvider
    ) {}


  // creates a weather observer which can be subscribed to by other pages
  buildWeatherObservable(city: string, units: string) {

    // set the city, units and build the url for the http get request
    this.city = city;
    this.units = units;
    this.buildUrl();

    // create an observable that can be subscribed to later, handle any errors
    this.weatherObservable = Observable.create(
      (observer) => {
          this.http.get(this.url).subscribe(
            response => observer.next(response),
            error => observer.next("Error " + error['status'] + " likely invalid city or units"),
            () => observer.complete()
          );
      }
    )

  }

  // builds the url for the api call
  buildUrl() {
    this.url = this.baseUrl + this.city + "&units=" + this.units + "&appid=" + this.key; 
  }

  // gets the weather icon to be displayed alongisde alphanumeric data
  getIcon(icon: string): string {
    if(icon != undefined){
      let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
      return iconurl;
    }
    return undefined;
  }

}
