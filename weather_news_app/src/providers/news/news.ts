import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  // variables
  baseUrl: string = "https://newsapi.org/v2/top-headlines?country=";
  key: string = "4523324c4c624788994464681e0eeea4";
  url: string;
  country: string = undefined; // default country is undefined
  pageSize: string = "5"; // default pages is 5
  newsObservable: Observable<any>; // constructed and accessible to home page when initialized

  // constructor
  constructor(public http: HttpClient) {
  }

  // method which builds a news observable from which
  // data can be obtained
  buildNewsObservable(country: string){

    // update the country and build the url for the HTTP get request
    this.country = country;
    this.buildUrl();

    // create an observable that can be subscribed to later
    // handle any errors with a message
    this.newsObservable = Observable.create(
      (observer) => {
          this.http.get(this.url).subscribe(
            response => observer.next(response),
            error => observer.next("Error " + error['status'] + " likely invalid country, page size, or api key"),
            () => observer.complete()
          );
      }
    )

  }

  // build the url for the http GET request
  buildUrl() {
    this.url = this.baseUrl + this.country + "&pageSize=" + this.pageSize + "&apiKey=" + this.key; 
  }

}
