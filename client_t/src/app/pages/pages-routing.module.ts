import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';
import { DescComponent } from '../pages/desc/desc.component'
import { ProfileComponent} from '../pages/profile/profile.component'

const routes: Routes = [
    {
        path: '', 
        component: PageComponent, 
        children: [
            { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
            { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
            { path: 'profile', component: ProfileComponent },
            { path: 'description/:id', component: DescComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
