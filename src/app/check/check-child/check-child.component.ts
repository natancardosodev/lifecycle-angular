import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.scss']
})
export class CheckChildComponent implements OnInit {

  constructor() { 
    console.log("        CheckChild: constructor");
  }

  ngOnInit(): void {
    console.log("        CheckChild: ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("        CheckChild: ngOnChanges");
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("        CheckChild: ngDoCheck");
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("        CheckChild: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("        CheckChild: ngAfterContentChecked");
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("        CheckChild: ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("        CheckChild: ngOnDestroy");
  }

}
