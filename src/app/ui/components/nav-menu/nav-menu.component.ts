import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface MenuOption {
  path: string,
  name: string,
}


@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {

  public readonly menuOptions: MenuOption[] = [
    {
      name: "Productos",
      path: "/admin/products"
    },
    {
      name: "Categorias",
      path: "/admin/categories"
    },
    {
      name: "Ventas",
      path: "/admin/sales"
    },
  ];

}
