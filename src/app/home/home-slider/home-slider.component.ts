import { Component, OnInit, OnDestroy } from '@angular/core';
import {SliderService} from '../../../services/SliderService';
@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  public slider: SliderService;
  constructor() {
   }

  ngOnInit() {
    this.slider = new SliderService('home-slider', 'home-slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }
  onResize($event){
    this.slider.stopAnimate();
    this.slider = new SliderService('home-slider', 'home-slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }

  ngOnDestroy() {
    this.slider.stopAnimate();
  }
}
