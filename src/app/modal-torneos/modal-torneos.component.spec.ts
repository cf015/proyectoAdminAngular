import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTorneosComponent } from './modal-torneos.component';

describe('ModalTorneosComponent', () => {
  let component: ModalTorneosComponent;
  let fixture: ComponentFixture<ModalTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
