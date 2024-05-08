import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// project import
import { AdminComponent } from './demo/layout/admin';
import { EmptyComponent } from './demo/layout/empty';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEtudiantComponent } from './profile-etudiant/profile-etudiant.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',redirectTo: '/auth/login',pathMatch: 'full'
      },
      {
        path: 'dashboard',loadComponent: () => import('./demo/pages/dashboard/dashboard.component')
      },
      {
        path: 'component',loadChildren: () => import('./demo/pages/ui-component/ui-component.module').then((m) => m.UiComponentModule)
      },
      {
        path: 'sample-page',loadComponent: () => import('./demo/pages/sample-page/sample-page.component')
      },
      {path:"profile", component:ProfileComponent},
      {path:"profileEtudiant", component:ProfileEtudiantComponent},

    ]
  },
  {
    path: '',component: EmptyComponent,
    children: [
      {
        path: 'auth',loadChildren: () => import('./demo/pages/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
