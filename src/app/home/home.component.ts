import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { BuildsContainerComponent } from '../shared/components/builds-container/builds-container.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, BuildsContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
