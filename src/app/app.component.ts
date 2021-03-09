import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  selected = [];
}
