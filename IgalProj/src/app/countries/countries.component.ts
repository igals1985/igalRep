import { Component} from '@angular/core';
import { CountriesInfo } from 'src/app/shared/models/countries-info.model';
import { countryService } from 'src/app/shared/services/countries-service.services';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  


NameSearch:string;


  public localCountriesInfo:CountriesInfo;

  ngOnInit() {
    this.localCountriesInfo = this.myCountryService.countryInfo;
  }
 
  
    public constructor(private myCountryService: countryService) {
    }
    
  
  }
  /*
  vegtableArray: string[] = new Array<string>();
  firstChart: string
  vegtableArrayWithChart: string[] = new Array<string>();
  errorMsg: string;

  constructor() {
      this.vegtableArray = ["art
  public searchFirstChart() {
      this.vegtableArrayWithChart = []
      if (this.firstChart.length < 2) {
          for (let i = 0; i <= this.vegtableArray.length; i++) {
              if (this.firstChart == this.vegtableArray[i].charAt(0)) {
                  this.vegtableArrayWithChart.push(this.vegtableArray[i]);
                  this.errorMsg = "";
              }
          }
      }
      else {
          
          this.errorMsg = "please enter only 1 chart";
      }
  }
}
*/