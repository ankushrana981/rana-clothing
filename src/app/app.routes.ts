import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { BespokeComponent } from './modules/bespoke/bespoke.component';
import { FabricsComponent } from './modules/fabrics/fabrics.component';
import { AlterationsComponent } from './modules/alterations/alterations.component';
import { ServicesComponent } from './modules/services/services.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path:'about',
                component:AboutUsComponent
            },
            {
                path:'bespoke',
                component:BespokeComponent
            },
            {
                path:'fabrics',
                component:FabricsComponent
            },
            {
                path:'alterations',
                component:AlterationsComponent
            },
            {
                path:'services',
                component:ServicesComponent
            },
            {
                path:'contact',
                component:ContactUsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    }
];
