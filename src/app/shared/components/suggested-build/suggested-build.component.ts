import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suggested-build',
  imports: [CommonModule],
  templateUrl: './suggested-build.component.html',
  styleUrl: './suggested-build.component.css',
})
export class SuggestedBuildComponent {
  @Input() gamingBuild: {
    tiers: {
      name: string;
      components: { name: string; specs: string }[];
      price: number;
    }[];
  } = {
    tiers: [],
  };

  @Input() officeBuild: {
    tiers: {
      name: string;
      components: { name: string; specs: string }[];
      price: number;
    }[];
  } = {
    tiers: [],
  };

  @Input() editingBuild: {
    tiers: {
      name: string;
      components: { name: string; specs: string }[];
      price: number;
    }[];
  } = {
    tiers: [],
  };
}
