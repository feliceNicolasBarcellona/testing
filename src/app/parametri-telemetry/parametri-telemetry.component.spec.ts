import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametriTelemetryComponent } from './parametri-telemetry.component';

describe('ParametriTelemetryComponent', () => {
  let component: ParametriTelemetryComponent;
  let fixture: ComponentFixture<ParametriTelemetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParametriTelemetryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParametriTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
