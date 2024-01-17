import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgValidateComponent } from './img-validate.component';

describe('ImgValidateComponent', () => {
  let component: ImgValidateComponent;
  let fixture: ComponentFixture<ImgValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
