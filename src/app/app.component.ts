import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dr-rise-demo';
  tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
}
