import { RouterModule } from '@angular/router';
import { PageIndexComponent } from './index.component';
import { UserComponent } from '../user/user.component';

export const indexRoutes=[
	{
		path: '',
		component: PageIndexComponent,
		children: [
			{ path: '', component: UserComponent },
			{ path: 'user1', component: UserComponent },
			{ path: 'user2', component: UserComponent },
			{ path: 'user3', component: UserComponent },
			{ path: 'user4', component: UserComponent },
			{ path: 'user5', component: UserComponent },
		]
	}
];
