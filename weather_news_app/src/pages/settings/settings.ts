import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoredDataProvider } from '../../providers/stored-data/stored-data';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  // variables
  units: string = "metric"; // initialize as undefined, but get from oldUnits variable or persistent storage
  savedUnits: string = "metric"; // a tempororary variable to backup the previously saved units should the user not save their settings
  city: string = undefined; // undefined, set to default value of Galway if user does not enter a city
  savedCity: string = undefined; // a tempororary variable to backup the previously saved city should the user not save their settings
  requestedSave: boolean = false; // boolean switch which controls whether to save user input or not

  // constructor
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storedDataProvider: StoredDataProvider
    ) {}

  // called every time the view is navigated to
  ionViewWillEnter(){

    // set to false every time page is loaded
    this.requestedSave = false;

    // get the settings from the stored data provider (persistent memory)
    this.storedDataProvider.getSettings().then(
      (settings) => {
        this.savedCity = settings['city'];
        this.savedUnits = settings['units'];
        this.units = settings['units'];
        this.city = settings['city'];
      }
      )
      .catch(() => {
        this.city = this.savedCity;
        this.units = this.savedUnits;
      })
      ;
    }

  // saves the settings based on user request
  save(){
    this.requestedSave = true;
    this.navCtrl.pop();
  }

  // on exit -- update the city and units that are in storage
  ionViewWillLeave(){

    // if save was requested then update the city and units
    if(this.requestedSave == true){

      // sanitize any user input for the city
      // don't allow any empty strings through -- default to savedCity if
      // user input is blank
      if(this.city != undefined){
        let temp = this.city.replace(/\s+/g, "");
        if(temp.length == 0){
          this.city = undefined;
        }
      }
      
      // only use the default city if the user does not input a city
      // and there was no city in persistent storage
      if(this.city == undefined && this.savedCity == undefined){
        this.savedCity = "Galway";
      }
      // else if the user has input overwrite the saved value -- actually done at end of method
      else if(this.city != undefined){
        this.savedCity = this.city;
      }

      // always update the units when save is requested
      this.savedUnits = this.units;

    }
    // else restore defaults/values loaded from settings
    else{
      this.city = this.savedCity;
      this.units = this.savedUnits;
    }

    // add city and units to persistent storage
    this.storedDataProvider.addKeyValuePair("settings", {"units": this.savedUnits, "city": this.savedCity});
  
  }
  
}
