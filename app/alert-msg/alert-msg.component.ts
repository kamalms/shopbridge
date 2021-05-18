import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.scss']
})
export class AlertMsgComponent implements OnInit {

  @ViewChild('alert', { static: true }) alert: ElementRef;
  @Input() alertMessage : any;
  @Input() warning : boolean = false;
  constructor() { }
  closeAlert() {
  //  console.log('close alert',  this.alert.nativeElement.classList)
    // this.alert.nativeElement.classList.add('fade');
  }
  ngOnInit() {

   // console.log('on init of alert')
   
  }


}
