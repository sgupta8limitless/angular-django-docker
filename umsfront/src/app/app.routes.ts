import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:"user",component:UserComponent},
    {path:"product",component:ProductComponent}
];
