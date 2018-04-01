import { Component } from '@angular/core';
import { random } from 'lodash';

//declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;
  title = 'app';
  rootName = 'Maximilian';

  onNameChanged(newName) {
    this.rootName = newName;
  }

  increase() {
    this.number = random(1, 10);
  }
}
