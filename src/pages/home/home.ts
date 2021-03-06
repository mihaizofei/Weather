import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // styleUrls: ['./home.scss']
})
export class HomePage {
  public title: string;
  public city: string;

  constructor(public navCtrl: NavController) {
    this.title = 'Craiova';
  }

  public searchCity(){
    console.log(`You've searched: ${this.city}`);
  }

}
