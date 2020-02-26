import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.scss']
})
export class MainLifecycleComponent implements OnInit {

  public foods: string[] = ["Rice", "Beans", "Pizza"];
  public clients: Client[] = [];
  public name: string;
  public age: number;
  public food: string;
  public editClient: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.editClient == -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
    this.name = null;
    this.age = null;
    this.food = null;
  }

  edit(i: number) {
    this.name = this.clients[i].name;
    this.age = this.clients[i].age;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

  remove(i: number) {
    this.clients.splice(i, 1);
  }

}
