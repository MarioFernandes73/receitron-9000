import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Starter Page',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Starter Page'}]
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
		CommonModule, 
		RouterModule.forChild(routes),
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule
    ],
	declarations: [StarterComponent]
})
export class StarterModule { }