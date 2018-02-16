import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) { 
  //constructor(@Inject("IPeopleService")private _peopleService: IPeopleService) { 

  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }

  ngOnInit() {
      //this.people = _peopleService.getAll();  
      this.people = this.peopleService.getAll();
  }

}
