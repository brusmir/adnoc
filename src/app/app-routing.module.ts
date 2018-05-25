import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NominationsComponent } from './dynamic/nominations/nominations.component';
import { InboxComponent } from './dynamic/inbox/inbox.component';
import { DetailsComponent } from './dynamic/details/details.component';
	
const appRoutes: Routes = [
	{ path: 'nominations', component: NominationsComponent },
	{ path: 'inbox', component: InboxComponent },  	
	{ path: 'details', component: DetailsComponent },  	
	{ path: '', redirectTo: '/nominations', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }