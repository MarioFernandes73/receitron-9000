import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';
import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { DescComponent } from './desc/desc.component';
import { ProfileComponent } from './profile/profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        FormsModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        DescComponent,
        ProfileComponent
    ]
})
export class PagesModule { }
