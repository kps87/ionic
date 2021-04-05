import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { StoredDataProvider } from '../../providers/stored-data/stored-data';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  // variables
  cityData;
  cities: string[] = [];
  disableButton: boolean = false;

  // constructor
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storedDataProvider: StoredDataProvider
    ) {
  }

  // delegate to other methods when page loads
  ionViewDidLoad() {
    this.loadHistory()
  }

  // function which loads history from persistent storage
  loadHistory(){
    let historyObservable = Observable.fromPromise(this.storedDataProvider.getHistory());
    historyObservable.subscribe(data => {
      if(data == null){
        this.cityData = undefined;
        this.cities = [];
      }
      else{
        this.cities = data['cities']
        this.cityData = data['cityData'];
      }
    });
  }

  // clear the history and disable the button
  clearHistory(){
    let promise = this.storedDataProvider.storage.clear();
    promise.then(() => {
      this.loadHistory();
      this.disableButton = true;
    }
    )
    .catch(
      () => this.loadHistory()
    );
  }


}
