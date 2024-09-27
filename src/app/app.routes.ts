import { Routes } from '@angular/router';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HomeComponent } from './home/home.component';
import { DeeperRouteComponent } from './deeper-route/deeper-route.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'routing-demo',
        component: RoutingDemoComponent,
        title: 'Routing Demo Page'
    },
    {
        path: 'test-component',
        component: TestComponentComponent,
        title: 'Test Page'
    },
    {
        path: 'deeper-route',
        component: DeeperRouteComponent,
        title: 'Deeper Route Page'
    }
];
