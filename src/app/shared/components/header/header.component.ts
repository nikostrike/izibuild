import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
