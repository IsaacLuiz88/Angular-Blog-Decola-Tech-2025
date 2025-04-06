import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, HomeComponent, MenuBarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'angular-client';
}
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
>>>>>>> 267d7d402d3fa29230b34863bcc1e266c40a1cf9
