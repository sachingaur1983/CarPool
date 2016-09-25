import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatternComponent } from './login/pattern.component';
import { RegisterComponent } from './registration/register.component';

const appRoutes: Routes = [
    {
        path: 'pattern',        
        component: PatternComponent
    },
    {
        path: '', // default path
        component: RegisterComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
