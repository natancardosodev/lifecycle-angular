import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: string;
  @Input() food: string;

  constructor() { }

  ngOnInit(): void {
  }

}
