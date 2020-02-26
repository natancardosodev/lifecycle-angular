import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {

  @Input() name: string;
  @Input() age: string;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  public nextEventId: number = 0;

  colors: string[] = ["accent", "warn", "primary"];

  constructor() {
    console.log(this.name + " constructor");
    this.newEvent("constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, 
    //but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    this.newEvent("ngOnChanges");
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const element = changes[propName];
        console.log("New: " + element.currentValue + 
          " | Old: " + element.previousValue);
      }
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, 
    //and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.name + " ngOnInit");
    this.newEvent("ngOnInit");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or 
    //directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.name + " ngAfterContentInit");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's 
    //view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.name + " ngAfterViewInit");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log(this.name + " ngOnDestroy");
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id, name: name, color: this.colors[id % this.colors.length]
    });
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length*2000);
  }

}
