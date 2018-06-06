import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myMessageString = '';
  myColor = '#ff51f6';
  myFontSize = '30';
  myLabelButton = 'Clear Message';
  myLastMessageString = '';

  // Create Function For Click
  onClickClear() {

    this.myLastMessageString = this.myMessageString;

    this.myMessageString = '';

  } // onClickClear


} // AppComponent Class


