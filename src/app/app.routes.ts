import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import("./auth/auth-routing.module").then(m => m.AuthRoutingModule),
            }
        ]
    },

    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'products',
                loadChildren: () => import("./products/products-routing.module").then(m => m.ProductsRoutingModule),
            }
        ]
    },

];
