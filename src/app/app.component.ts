import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:scroll)': 'onscroll($event)'
  },
})
export class AppComponent {
  public scrolled = false;
  private eventSubscription: any;
  onscroll($event){
    if(window.scrollY>100){
      this.scrolled = true;
    }
    else{
      this.scrolled = false;
    }

    // console.log('scrolled : ' + this.scrolled);
  }

  scrollToTop(){
    this.scrolled = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
  //   this.eventSubscription = Observable.fromEvent(window, "scroll").subscribe(e => {
  //     console.log('scrolled : '+ window.scrollY);
  // });
  }
}
