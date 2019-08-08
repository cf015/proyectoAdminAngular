import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechasComponent } from './modal-fechas.component';

describe('ModalFechasComponent', () => {
  let component: ModalFechasComponent;
  let fixture: ComponentFixture<ModalFechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
