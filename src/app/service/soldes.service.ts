import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class SoldesService {
  private url = "http://www.cloudpharma.org/backendpharma/public/index.php";
  private header :HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

   }

  // Requette Hppt de reccuperation de pensions par interval de date
  public getPharmacies(param): Promise<any>{
    let params="param="+JSON.stringify(param);
    console.log(params);
    let link=this.url+ '/api/produit/listPharm';
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
  }

  public posistionnerPharmacie (param): Promise<any>{
    let params="idShop="+param.idShop+'&montant='+param.montant+'&a='+param.a+'&b='+param.b+'&z='+param.z;
    console.log(params);
    let link=this.url+ '/api/produit/positionner';
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
  }


}
