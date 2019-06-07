import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonokNavComponent } from './fonok-nav.component';

describe('FonokNavComponent', () => {
  let component: FonokNavComponent;
  let fixture: ComponentFixture<FonokNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonokNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonokNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
