import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
	
const appRoutes: Routes = [		
	{ path: 'nominations/:id', component: DetailsComponent }	
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class DynamicRoutingModule { }