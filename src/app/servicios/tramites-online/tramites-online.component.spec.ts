import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesOnlineComponent } from './tramites-online.component';

describe('TramitesOnlineComponent', () => {
  let component: TramitesOnlineComponent;
  let fixture: ComponentFixture<TramitesOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramitesOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramitesOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
