import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {userRouters} from './user.routers';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import { NgxEchartsModule } from 'ngx-echarts';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SuiviSoldesComponent } from './suivi-soldes/suivi-soldes.component';
import { SuiviTransactionsComponent } from './suivi-transactions/suivi-transactions.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRouters),
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    EditorModule,
    NgxPaginationModule,
  ],
  declarations: [
    UserComponent,
    SuiviSoldesComponent,
    DashbordComponent,
    SuiviTransactionsComponent,
    
  ],
  
  providers: []
})
export class UserModule {
}
