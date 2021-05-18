import { Component } from '@angular/core';
import { AlertService } from './alert-msg/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomm';
  alertText = 'Welcome To Inventory Section';
  // addItem(){
  //   this.router.navig
  // }
  constructor(private alert: AlertService) {

  }


  ngOnInit() {


    this.alert.AlertText.subscribe((data) => {

      this.alertText = data;
    });
  }


}
