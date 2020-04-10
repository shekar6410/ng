import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.css']
})
export class ComponentLifeCycleComponent implements OnInit, OnChanges{
  userText='Shekar';
@Input() simpleInput=this.userText;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    for(let propertyName in changes){
      let change=changes[propertyName];
      let current=JSON.stringify(change.currentValue);
      let previous=JSON.stringify(changes.previousValue);
      console.log(propertyName+ ': currentValue='+ current+ ', previousValue='+previous);

    }

  }

}
