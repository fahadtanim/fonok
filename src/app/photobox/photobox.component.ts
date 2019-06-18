import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy,OnInit,SimpleChange} from '@angular/core';
import { SliderService } from 'src/services/SliderService';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-photobox',
  templateUrl: './photobox.component.html',
  styleUrls: ['./photobox.component.scss']
})

export class PhotoboxComponent implements OnInit,OnDestroy {

  mobileQuery: MediaQueryList;
  public mainFooter : any;
  public slider: SliderService;
  public category;
  public subcategory;
  public scrolled: boolean;
  public elem;
  // MatPaginator Inputs
  length = 100;
  pageSize = 7;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private _route: ActivatedRoute, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    // this._route.firstChild.params.subscribe(
    //   params => {
    //     this.category = params['category']
    //     this.subcategory = params['subCategory']
    //   }
    // )
    // console.log('came2');
    // console.log(this.category);
    // console.log(this.subcategory);

    // var x = document.getElementsByClassName('mat-paginator-page-size');
    // console.log(x);
    // console.log(x.length);
    // document.getElementById('fonok-footer').style.display = "none";
    // this.mainFooter = elem;
    // document.getElementById('fonok-main-nav').removeChild(elem);

    // console.log(elem);
  }
  scrollToTop($event){
    this.scrolled = false;
    this.elem.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onScroll($event): void {
    // console.log('scrolling')
    this.elem = $event.target;
    // console.log(this.elem);
    if (this.elem.scrollTop > 300) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }

    // console.log('scrolled : '+this.scrolled);
  }

}
