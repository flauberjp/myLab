import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  swService: StarWarsService;
  @Input() character;

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }

  onAssign(newSide) {
    this.swService.onSideChosen({name: this.character.name, side: newSide});
  }

}
