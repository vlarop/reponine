import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit/edit.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { PasswordComponent } from './password/password/password.component';
import { UsernameComponent } from './set/username/username.component';
import { SetModule } from './set/set.module';
import { PasswordModule } from './password/password.module';
import { EditModule } from './edit/edit.module';



// const routes: Routes = [
// {
//   path: "",
//   pathMatch: 'full',
//   component: IntroductionComponent,


//   children: [
// {
//   path: 'password',
//   loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
// },
// {
//   path: 'username',
//   loadChildren: () => import('./set/set.module').then(m => m.SetModule)
// },
// {
//   path: 'edit',
//   loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
// }
// ]
// }
// ];



const routes: Routes = [

  {
    path: '',
    component: IntroductionComponent,
    pathMatch: 'full',
  
    children: [
 
 
  
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
  },
  // {
  //   path: 'username',
  //   loadChildren: () => import('./set/set.module').then(m => m.SetModule)
  // },


  {
    path: 'username',
    loadChildren: () => import('src/app/set/set.module').then(m => m.SetModule)
  },


  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  }
     ],

  }


  // {
  //   path: 'path', 
  //   loadChildren: () => import('lazy-path').then(m => m.lazy-module)
  // },
];



// const routes: Routes = [
//   {
//     path: "",
//     pathMatch: 'full',
//     component: IntroductionComponent
//   },
//   {
//     path: 'password',
//     component: PasswordComponent,
    
//   },
//   {
//     path: 'username',
//     component: UsernameComponent,   
//   },
//   {
//     path: 'edit',
//     component: EditComponent     
//   },


// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
