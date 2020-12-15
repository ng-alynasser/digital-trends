import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: {
      titleEN: 'DT | Home',
      titleAR: 'DT | الرئيسية',
    },
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
    data: {
      titleEN: 'DT | Blog',
      titleAR: 'DT | المدونة',
    },
  },
  {
    path: 'our-work',
    loadChildren: () =>
      import('./pages/work/work.module').then((m) => m.WorkModule),
    data: {
      titleEN: 'DT | Work',
      titleAR: 'DT | أعمالنا',
    },
  },
  {
    path: 'branding',
    loadChildren: () =>
      import('./pages/branding/branding.module').then((m) => m.BrandingModule),
    data: {
      titleEN: 'DT | Branding',
      titleAR: 'DT | صناعة الهوية',
    },
  },
  {
    path: 'product-design',
    loadChildren: () =>
      import('./pages/product-design/product-design.module').then(
        (m) => m.ProductDesignModule
      ),
    data: {
      titleEN: 'DT | Product Design',
      titleAR: 'DT | تصميم المنتج',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
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
