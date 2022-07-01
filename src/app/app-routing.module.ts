import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:genre',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./users/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./users/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./users/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./products/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'show/:id',
    loadChildren: () => import('./products/show/show.module').then( m => m.ShowPageModule)
  },
  {
    path: 'checkout1',
    loadChildren: () => import('./cards/checkout1/checkout1.module').then( m => m.Checkout1PageModule)
  },
  {
    path: 'checkout2',
    loadChildren: () => import('./cards/checkout2/checkout2.module').then( m => m.Checkout2PageModule)
  },
  {
    path: 'checkout3',
    loadChildren: () => import('./cards/checkout3/checkout3.module').then( m => m.Checkout3PageModule)
  },
  {
    path: '',
    redirectTo: 'present',
    pathMatch: 'full'
  },
  {
    path: 'present',
    loadChildren: () => import('./users/present/present.module').then( m => m.PresentPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./products/collections/collections.module').then( m => m.CollectionsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cards/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'list/:name',
    loadChildren: () => import('./products/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-collections/:name',
    loadChildren: () => import('./products/list-collections/list-collections.module').then( m => m.ListCollectionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
