import { Component, OnInit } from '@angular/core';
import { userModel } from '../model/user.model';
import {Router} from '@angular/router';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public userName: string = userModel.userName;
  constructor(private router: Router, private confirmSrv: NzModalService, private notice: NzNotificationService) { }

  ngOnInit() {
    this.notice.info('Avis', `Bienvenue : ${this.userName}`);
  }
  public logout(): void {
    this.confirmSrv.confirm({
      nzTitle: 'Quitter',
      nzContent: 'Vous êtes sur le point de vous déconnecter, souhaitez-vous vous déconnecter ?',
      nzOkText:"Oui",
      nzCancelText:"Non",
      nzOnOk: () => {
        userModel.isLogin = false;
        userModel.userName = '';
        userModel.password = '';
        this.router.navigateByUrl('/login');
      }
    });
  }

}
