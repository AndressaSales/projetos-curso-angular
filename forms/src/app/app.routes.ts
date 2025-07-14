import { Routes } from '@angular/router';


import { TemplateForm } from './components/template-form/template-form';
import { DataForm } from './components/data-form/data-form';

export const routes: Routes = [
    {path: 'templateForm', title: 'Template', component: TemplateForm},
    {path: 'dataForm', title: 'Data', component: DataForm},
    {path: '', pathMatch: 'full', redirectTo: '/dataForm'}
];
