import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
import { StarWarsService } from './star-wars.service';

//declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  number = 0;
  title = 'app';
  rootName = 'Maximilian';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

  increase() {
    this.number = random(1, 10);
  }

  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
