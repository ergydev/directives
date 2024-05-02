import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { button } from './button';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';

  isAdmin: boolean = true;

  mainTitle: string = 'Bonjour !';
  
  button: button = {
    label: 'View',
  }
  
  button2: button = {
    label: 'Edit',
  }

  button3: button = {
    label: 'Connect Admin',
  }

  toggleAdmin(){
    this.isAdmin = !this.isAdmin;
  }
}
