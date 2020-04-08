import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.css']
})
export class ComponentLifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
