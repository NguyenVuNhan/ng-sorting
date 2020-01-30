import { Component } from '@angular/core';
import { MenuFabAnimations } from './menu-fab.animation';

import { SortConfig } from '../common/sort_config';

@Component({
  selector: 'app-menu-fab',
  templateUrl: './menu-fab.component.html',
  styleUrls: ['./menu-fab.component.css'],
  providers: [SortConfig],
  animations: MenuFabAnimations
})
export class MenuFabComponent {
  private fabOpen = false;
  private fabTogglerState = 'inactive';

  private delay: number;
  private sample_size: number;

  constructor(private sortConfig: SortConfig) {
    this.delay = sortConfig.delay;
    this.sample_size = sortConfig.sample_size;
  }

  onToggleFab() {
    if(!this.fabOpen) {
      this.fabTogglerState = 'active';
      this.fabOpen = true;
    }
    else {
      this.fabTogglerState = 'inactive';
      this.fabOpen = false;
    }
  }

  increaseDelay() {
    this.delay += 5;
    this.sortConfig.delay = this.delay;
  }
  
  decreaseDelay() {
    this.delay -= 5;
    this.sortConfig.delay -= this.delay;
  }
}
