import { Component } from '@angular/core';

@Component({
    selector: 'reverse-counter',
    templateUrl: './reverse-counter.component.html'
})

export class ReverseCounterComponent {
    public currentCount = 10000;

    public decrementCounter() {
        this.currentCount--;
    }
}

