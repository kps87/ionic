import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoredDataProvider {

  // constructor
  constructor(public storage: Storage) {
  }

  // sets a key value pair in session storage
  addKeyValuePair(key: string, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  // gets a key value pair from session storage
  getSettings(): Promise<any> {
    return this.storage.ready().then(
      () => {return this.storage.get("settings")}
    ).catch(
      () => {return this.storage.get("settings")}
    )
  }

  // function which returns a promise based on an attempt to get
  // the "history" key from storage -- used to build the 'history' page which is an added feature
  getHistory(): Promise<any>{
    return this.storage.ready().then(
      () => {return this.storage.get("history")}
    ).catch(
      () => {return this.storage.get("history")}
    )
  }

  // adds data to a history so that 'history' page feature can be implemented
  addWeatherAndNewsToSessionHistory(city: string, newsAndWeater){

    // capitalize the city
    let cityCapitalize = city[0].toUpperCase() + city.substr(1).toLowerCase();
    let historyObservable = Observable.fromPromise(this.getHistory());

    // this.storage.set(city.toLowerCase(), newsAndWeater);
    historyObservable.subscribe(data => {

      // if there is not data in the history, then just add this city
      if(data == null){
        data = {}
        data['cityData'] = {};
        data['cities'] = [cityCapitalize];
        data['cityData'][cityCapitalize] = newsAndWeater;
      }
      // else append the city to pre-existing data -- make sure to
      // remove a city if it pre-exists and place the new history data first in the history array
      else{

        // if city is in array remove it, then add it to the beginning of the list
        let index = data['cities'].indexOf(cityCapitalize);
        if(index > -1){
          data['cities'].splice(index, 1);
        }
        data['cities'].unshift(cityCapitalize);

        // overwrite the city data
        data['cityData'][cityCapitalize] = newsAndWeater;
      
      }

      // add the history to persistent storage
      this.addKeyValuePair("history", data);
    });
  }

}
