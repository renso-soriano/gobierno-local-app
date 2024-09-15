import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCiudadanosComponent } from './servicios-ciudadanos.component';

describe('ServiciosCiudadanosComponent', () => {
  let component: ServiciosCiudadanosComponent;
  let fixture: ComponentFixture<ServiciosCiudadanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosCiudadanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosCiudadanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
