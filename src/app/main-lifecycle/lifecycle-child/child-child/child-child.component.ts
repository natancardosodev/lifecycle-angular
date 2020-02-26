import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    console.log("       Child Child (ngOnInit) - " + this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("       Child Child (ngOnChanges) - " + this.name);
  }

  ngAfterContentInit(): void {
    console.log("       Child Child (ngAfterContentInit) - " + this.name);
  }

}
