
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CountriesInfo } from "src/app/shared/models/countries-info.model";

@Injectable()
export class countryService {
    countryInfo:any={}
    constructor(private myHttpClient: HttpClient) {

        let apiUrl: string =`https://restcountries.eu/rest/v2/all?fields=name;nativeName;capital;population;flag`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x:CountriesInfo) => { this.countryInfo = x; });
    }

}