/**
 * @Author: Tuber
 * @Date: 2018/10/26
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/10/26
 */
import { Router } from '@angular/router';
import {PagesComponent} from './pages.component';
export const pagesRouters = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: '../user/user.module#UserModule'
      }
    ]
  }
];
