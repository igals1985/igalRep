import { Injectable } from "@angular/core";

import { RootObject } from "../models/user-root-object.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class userService {
    userInfo: RootObject = { data:[] };

    constructor(private myHttpClient: HttpClient) {

        let apiUrl: string =`https://reqres.in/api/users`;
        
        this.myHttpClient.get(apiUrl)
            .subscribe((x: RootObject) => { this.userInfo.data = x.data; });
    }

}