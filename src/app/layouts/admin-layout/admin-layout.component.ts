import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavMenuComponent } from '../../ui/components/nav-menu/nav-menu.component';
import { SearchProductsInputComponent } from "../../products/components/search-products-input/search-products-input.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [NavMenuComponent, RouterOutlet, SearchProductsInputComponent],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {

}
