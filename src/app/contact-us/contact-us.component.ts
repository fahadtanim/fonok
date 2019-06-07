import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Particles } from 'src/services/Particles';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public particleStyle: object = {};
  public particleParams: object = {};
  public particleHeight: number;
  homeContactForm: FormGroup;
  submitted = false;
  isEditable: boolean;
  contactParticle: Particles;
  constructor( private formBuilder: FormBuilder ) {
    this.isEditable = false;
    this.homeContactForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    });
   }

  ngOnInit() {
    this.contactParticle = new Particles();
    this.contactParticle.particle.particles.number.value = 120;
    this.particleParams = this.contactParticle.particle;
    this.particleStyle = {
      'width': '100%',
      'height': '100vh'
    };
    document.getElementById('home-contact').style.marginTop = '-100vh';
  }

  onSubmit(): void {
    console.log(this.homeContactForm);
  }

}
