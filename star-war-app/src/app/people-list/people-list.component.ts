import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
        {{person.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) { 
  //constructor(@Inject("IPeopleService")private _peopleService: IPeopleService) { 

  }

  ngOnInit() {
      //this.people = _peopleService.getAll();  
      this.people = peopleService.getAll();
  }

}
