import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoboxFooterComponent } from './photobox-footer.component';

describe('PhotoboxFooterComponent', () => {
  let component: PhotoboxFooterComponent;
  let fixture: ComponentFixture<PhotoboxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoboxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoboxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
