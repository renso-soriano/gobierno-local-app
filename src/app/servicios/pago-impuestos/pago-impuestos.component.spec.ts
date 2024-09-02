import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoImpuestosComponent } from './pago-impuestos.component';

describe('PagoImpuestosComponent', () => {
  let component: PagoImpuestosComponent;
  let fixture: ComponentFixture<PagoImpuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoImpuestosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoImpuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
