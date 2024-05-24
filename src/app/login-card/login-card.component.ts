import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
@Input('label') label: String = 'login';
}
