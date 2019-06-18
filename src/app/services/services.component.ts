import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ServicesComponent implements OnInit {

  constructor() { }
  onResize($event){
    let h = document.getElementsByClassName('photobox-section-wrapper')[0].clientHeight;
    let x = <HTMLElement>document.getElementsByClassName('photobox-section-wrapper')[0];
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".gridline:before {height: "+h+"px;}"+".gridline:after {height: "+h+"px;}";
  }
  ngOnInit() {
    let h = document.getElementsByClassName('photobox-section-wrapper')[0].clientHeight;
    let x = <HTMLElement>document.getElementsByClassName('photobox-section-wrapper')[0];
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".gridline:before {height: "+h+"px;}"+".gridline:after {height: "+h+"px;}";
  }

}
