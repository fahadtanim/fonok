import { Component, OnInit, OnDestroy, SimpleChange } from '@angular/core';
import { SliderService } from 'src/services/SliderService';
import { MatDialog } from '@angular/material';
import { ViewPhotoComponent } from '../view-photo/view-photo.component';
import { ImageLibrary } from 'src/services/repository/ImageLibrary';
import { SliderImageLibrary } from 'src/services/repository/SliderImageLibrary';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-photobox-category',
  templateUrl: './photobox-category.component.html',
  styleUrls: ['./photobox-category.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PhotoboxCategoryComponent implements OnInit,OnDestroy {
  public slider: SliderService;
  public Images: any;
  public SliderImages: any;
  public imageServices: ImageLibrary;
  public sliderImageService: SliderImageLibrary;
  public _routeSubscribe: any;
  public category;
  public subcategory;
  public counter = Array;
  constructor(public dialog: MatDialog, private _route: ActivatedRoute, private router: Router) {
    this.category = '';
    this.subcategory = '';
  }

  ngOnDestroy(): void {
    this.slider.stopAnimate();
    this._routeSubscribe.unsubscribe();
  }

  ngOnInit() {

    this.imageServices = new ImageLibrary();
    this.sliderImageService = new SliderImageLibrary();
    this._routeSubscribe = this._route.params.subscribe(
      param => {
        this.category = param.category;
        this.subcategory = param.subCategory;
        if (this.category && this.subcategory) {
          this.Images = this.imageServices.getImages(this.category, this.subcategory);
          this.SliderImages = this.sliderImageService.getImages(this.category, this.subcategory);
        } else{
          this.category = 'product';
          this.subcategory = 'random';
          this.SliderImages = this.sliderImageService.getImages(this.category, this.subcategory);
          this.Images = this.imageServices.getImages(this.category, this.subcategory);

        }

      }
    )

    // console.log(this.category);
    // console.log(this.subcategory);
  }
  onResize($event){
    this.slider.stopAnimate();
    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }

  ngAfterViewInit(){
    this.slider = new SliderService('slider', 'slider-container', 'dot', 'active', 3);
    this.slider.animate();
  }
  openPhoto(img ){
    const dialogRef = this.dialog.open(ViewPhotoComponent,{data: img,width: 'auto', height: 'auto'});
  }


}
