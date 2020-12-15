import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'our-work',
    loadChildren: () =>
      import('./pages/work/work.module').then((m) => m.WorkModule),
  },
  {
    path: 'branding',
    loadChildren: () =>
      import('./pages/branding/branding.module').then((m) => m.BrandingModule),
  },
  {
    path: 'product-design',
    loadChildren: () =>
      import('./pages/product-design/product-design.module').then(
        (m) => m.ProductDesignModule
      ),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'branding',
    loadChildren: () =>
      import('./pages/branding/branding.module').then((m) => m.BrandingModule),
  },
  {
    path: 'product-design',
    loadChildren: () =>
      import('./pages/product-design/product-design.module').then(
        (m) => m.ProductDesignModule
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
