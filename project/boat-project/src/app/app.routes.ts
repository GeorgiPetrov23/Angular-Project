import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFoundPage/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './posts/create/create.component';
import { CatalogComponent } from './posts/catalog/catalog.component';
import { DetailsComponent } from './posts/details/details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'catalog', children: [
        {path: '', component: CatalogComponent},
        {path: ':boatId', component: DetailsComponent}
    ]},
    {path: '**', component: NotFoundComponent}
];
