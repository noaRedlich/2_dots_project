import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MAIN_ROUTES } from "./+main";
import { NewUserComponent } from './new-user/new-user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OrderComponent } from './order/order.component';
import { ManagementUserContactComponent } from './management-user-contact/management-user-contact.component';
import { TableUserContactComponent } from './table-user-contact/table-user-contact.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MatchComponent } from './match/match.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { HomePageComponent } from './home-page/home-page.component';


const APP_ROUTES: Routes = [
    {
        path: 'ENTER',
        component: LoginPageComponent,
      },
      { path: '',
        redirectTo: '/ENTER',
        pathMatch: 'full'
      },
    {path:"login-page",component:LoginPageComponent,},
    {path:"home",component:AppComponent,},
    {path:"new-user",component:NewUserComponent,},
    {path:"subscription",component:SubscriptionComponent},
    {path:"order-details",component:OrderDetailsComponent},
    {path:"manager",component:ManagerComponent},
    {path:"management-user-contact",component:ManagementUserContactComponent},
    {path:"match",component:MatchComponent},
    {path:"order",component:OrderComponent},
    {path:"new-contact",component:NewContactComponent},
    {path:"table-user-contact",component:TableUserContactComponent}
//  ...AUTH_ROUTES, 
//     ...MAIN_ROUTES    
];
// @NgModule({
//     imports: [
//           RouterModule.forRoot(routes, {enableTracing: true}),
@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, {enableTracing: true}/*, { useHash: true }*/)
        // RouterModule.forRoot(APP_ROUTES/*, { useHash: true }*/)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }