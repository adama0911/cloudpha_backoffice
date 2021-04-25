/**
 * @Author: Tuber
 * @Date: 2018/10/25
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/10/25
 */
import { Router } from '@angular/router';
import {UserComponent} from './user.component';

import { SuiviSoldesComponent } from './suivi-soldes/suivi-soldes.component';
import { SuiviTransactionsComponent } from './suivi-transactions/suivi-transactions.component';
import { DashbordComponent } from './dashbord/dashbord.component';
export const userRouters = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'suivitransactions',
        pathMatch: 'full'
      },
      {
        path: 'suivitransactions',
        component: SuiviTransactionsComponent
      },
      {
        path: 'suiviParmacies',
        component: SuiviSoldesComponent
      },
      
      {
        path: 'dashbord',
        component: DashbordComponent
      }
    ]
  }
];
