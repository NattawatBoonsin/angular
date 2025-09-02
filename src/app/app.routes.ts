import { Routes } from '@angular/router';
import { Admin } from './Admin-Page/admin/admin';
import { AdminData } from './Admin-Page/admin-data/admin-data';
import { DataCustomer } from './Customer-Data/data-customer/data-customer';
import { FormCustomer } from './Customer-Data/form-customer/form-customer';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'data-customer',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'admin-data',
        component: AdminData
    },
    {
        path : 'data-customer',
        component: DataCustomer
    },
    {
        path : 'form-customer',
        component: FormCustomer
    },
    {
        path : 'app',
        component: App
    }
];
