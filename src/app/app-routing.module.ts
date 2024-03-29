import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { HomeComponent } from './component/views/home/home.component';
import { ProductCrudComponent } from './component/views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductCrudComponent,
  },
  {
    path: 'products/create',
    component: ProductCreateComponent,
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
