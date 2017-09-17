import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


export const appRoutes=[
	{
		path:'',
		redirectTo:'posts',
		pathMatch:'full'
	},
	{
		path:'',
		component: LoginComponent
	},
	{
		path:'login',
		component: LoginComponent
	},
	{
		path:'user',
		// loadChildren:'./pages/main/main.module#MainModule'
		component: UserComponent,
	}
];
