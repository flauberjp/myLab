import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';


  onAddItem(event) {
    this.itemAdded.emit(this.newItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
