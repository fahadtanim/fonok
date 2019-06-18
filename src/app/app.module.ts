import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './MaterialModule/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FonokNavComponent } from './fonok-nav/fonok-nav.component';
import { HomeComponent } from './home/home.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';
import { ParticlesModule } from 'angular-particle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PhotoboxComponent } from './photobox/photobox.component';
import { PhotoboxCategoryComponent } from './photobox-category/photobox-category.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { PhotoboxFooterComponent } from './photobox-footer/photobox-footer.component';
import { FragmentPolyfillModule } from "./fragment-polyfill-module";
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FonokNavComponent,
    HomeComponent,
    HomeAboutComponent,
    HomeSliderComponent,
    HomeContactComponent,
    HomeServicesComponent,
    HomeTestimonialsComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ServicesComponent,
    AboutUsComponent,
    PricingPlanComponent,
    ContactUsComponent,
    PhotoboxComponent,
    PhotoboxCategoryComponent,
    ViewPhotoComponent,
    PhotoboxFooterComponent
  ],
  entryComponents: [
    PrivacyPolicyComponent,
    ViewPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ParticlesModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
