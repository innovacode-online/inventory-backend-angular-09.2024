import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="auth__layout">
        <router-outlet></router-outlet>
    </main>
  `
})
export class AuthLayoutComponent {

}
