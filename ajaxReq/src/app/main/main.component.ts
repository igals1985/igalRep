import { Component } from '@angular/core';
import { RootObject } from '../shared/models/user-root-object.model';
import { userService } from '../shared/services/user-service.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],

})
export class MainComponent {



  public localUserData: RootObject;


  public constructor(private myUserService: userService) {
    this.localUserData = this.myUserService.userInfo;

  }

}
