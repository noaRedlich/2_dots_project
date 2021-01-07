import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";  



//prime-ng
import { KeyFilterModule } from 'primeng/keyfilter';
import { CheckboxModule, MenuModule, ContextMenuModule, ButtonModule, PanelModule, InputTextModule, DropdownModule,SpinnerModule, DataTableModule, TabMenuModule, RadioButtonModule, InputMaskModule,
    ProgressSpinnerModule, LightboxModule
} from 'primeng/primeng';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import {GalleriaModule} from 'primeng/galleria';
import {StepsModule} from 'primeng/steps';
import {EditorModule} from 'primeng/editor';

//app components
import { AppComponent } from './app.component';
import { MAIN_COMPONENTS } from './+main';
import { SHARED_COMPONENTS } from '../app/shared/uix/components/index'

//app modules
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services';
import { SharedModule } from './shared';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DataViewModule} from 'primeng/dataview';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import { SliderModule } from 'primeng/slider';
import {InputSwitchModule} from 'primeng/inputswitch';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OrderComponent } from './order/order.component';
import { ManagementUserContactComponent } from './management-user-contact/management-user-contact.component';
import { TableUserContactComponent } from './table-user-contact/table-user-contact.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CheckComponent } from './check/check.component';
import { MatchComponent } from './match/match.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewContactComponent } from './new-contact/new-contact.component';


@NgModule(
  {
  declarations: [
    //app components
    AppComponent,
    ...MAIN_COMPONENTS,
    ...SHARED_COMPONENTS,
    LoginPageComponent,
    NewUserComponent,
    SubscriptionComponent,
    OrderComponent,
    ManagementUserContactComponent,
    TableUserContactComponent,
    ManagerComponent,
    OrderDetailsComponent,
    CheckComponent,
    MatchComponent,
    HomePageComponent,
    NewContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgSpinnerModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule  ,

    //app modules
    ServicesModule,
    SharedModule,

    //prime-ng modules
    MenuModule,
    GalleriaModule,
    EditorModule,
    TreeTableModule,
    CheckboxModule,
    ContextMenuModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    StepsModule,
    TabMenuModule,
    DataTableModule,
    TableModule,
    DataViewModule,
    CalendarModule,
    DialogModule,
    AutoCompleteModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule,
    TabViewModule,
    RadioButtonModule,
    InputMaskModule,
    FileUploadModule,
    SliderModule,
    SpinnerModule,
    ProgressSpinnerModule,
    LightboxModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    
  ],
  providers: [
    //AutoService,
    //AuthGuard
  ], 
  bootstrap: [AppComponent]
}
)
export class AppModule { }
