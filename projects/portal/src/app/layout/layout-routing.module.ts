import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
{
	path: '',
	component: LayoutComponent,
	children: [
		{
			path: '', redirectTo: 'dashboard', pathMatch: 'prefix'
		},
		{
			path: 'dashboard',
			loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
			data: {animation: 'DashboardPage'}
		},
		{
			path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule),
			data: {animation: 'ChartsPage'}			
		},
		{
			path: 'raporty',
			loadChildren: () => import('./raports/raports.module').then(m => m.RaportsModule),
			data: {animation: 'RaportsPage'}
		},
	]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
