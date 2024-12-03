import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [

      {
        path:'',
        redirectTo:'users',
        pathMatch:'full'
      },
      {
        path:"users",
        component:UsersComponent
      },
      {
        path:"user/:id",
        component:UserDetailsComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
