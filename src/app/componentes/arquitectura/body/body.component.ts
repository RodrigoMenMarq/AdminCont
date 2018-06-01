import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent implements OnInit {
  public isCollapsed = false;
  
  constructor() {  }

  ngOnInit() {}
}
