import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './pages/single/single.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day4';
  
}
