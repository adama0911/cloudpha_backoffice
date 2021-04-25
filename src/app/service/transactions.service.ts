import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  // http://www.cloudpharma.org/backendpharma/public/index.php/api/produit/getBuyedProducts
  
  private url = "http://www.cloudpharma.org/backendpharma/public/index.php";
  private header :HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

   }
 

  // Requette Hppt de reccuperation de pensions par interval de date
  public getBuyedProducts (param): Promise<any>{
    let params="param="+JSON.stringify(param);
    console.log(params);
    let link=this.url+ '/api/produit/getBuyedProducts';
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res); return res} ).catch(error => {console.log(error); return 'bad' });
  }
}
