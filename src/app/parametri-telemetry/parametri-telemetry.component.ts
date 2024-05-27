import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-parametri-telemetry',
  templateUrl: './parametri-telemetry.component.html',
  styleUrls: ['./parametri-telemetry.component.css']
})
export class ParametriTelemetryComponent {
  @Input() type: 'temperature' | 'percentage' | 'voltage' = 'temperature';
}