import { Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  imgLink: string = "/assets/images/worldMap.jpg";
  constructor() { }

  ngOnInit() {
  }
}
