import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)

	},
	{ 
		path: 'log', 
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
