import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
   
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'district',component:DistrictComponent
    },
    {
        path:'district/:id',component:SingleComponent
    }
];

