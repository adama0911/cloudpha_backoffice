import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { TransactionsService } from 'src/app/service/transactions.service';

@Component({
  selector: 'app-suivi-transactions.component',
  templateUrl: './suivi-transactions.component.html',
  styleUrls: ['./suivi-transactions.component.css']
})
export class SuiviTransactionsComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  curentPartenaire={
    entreprise:"Black Company",
  };

  public dataSet: Array<object> = [
    {

      etat: 0,
      id: 15,
      prix: 797,
      produit: "MAXIDROL POM OPH 3G5",
      quantite: 4,
      adresse_seller: "mmjjn",
      nom_seller: "cloudpharma",
      solde_seller: 51329,
      tel_seller: "779013878",
      type_seller: "pharm",
      adresse_buyer: "mbour",
      id_buyer: 2,
      nom_buyer: "cp2",
      solde_buyer: 48406,
      tel_buyer: "778987766",
      type_buyer: "pharm"

    },
  ];

  public columns: Array<object> = [
    {
      title: "Produit",
    },
    {
      title:"Quantite",
    },
    {
      title:"Prix",
    },
    {
      title:"Pharmacie Seller",
    },
    {
      title:"Pharmacie Buyer",
    },
    {
      title:"Tel Seller",
    },
    {
      title:"Tel Buyer",
    },
    {
      title:"Etat",
    }
  ];

  parseDatas(produits){
    let arr = [];
    produits.forEach(element => {
      arr.push({
        etat: element.etat,
        id: element.id,
        prix: element.prix,
        produit: element.produit,
        quantite: element.quantite,
        adresse_seller: element.sellerPharm.adresse,
        nom_seller: element.sellerPharm.nom,
        solde_seller: element.sellerPharm.solde,
        tel_seller: element.sellerPharm.tel,
        type_seller: element.sellerPharm.type,
        adresse_buyer:  element.buyerPharm.adresse,
        id_buyer: element.buyerPharm.id,
        nom_buyer: element.buyerPharm.nom,
        solde_buyer: element.buyerPharm.solde,
        tel_buyer: element.buyerPharm.tel,
        type_buyer: element.buyerPharm.type
      });
    });

    return arr;
  }

  constructor(private fb: FormBuilder,private modalService: NzModalService,private _tranService:TransactionsService) {
  }

  showModal(curentPartenaire): void {
    this.curentPartenaire=curentPartenaire;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: '',
      state: ''
    });

    this._tranService.getBuyedProducts({}).then(rep=>{
      console.log(rep.produit);
      this.dataSet =  this.parseDatas(rep.produit);
    }).catch(err=>{
      console.log(err);
    })

  }

  public resetForm(): void {
    this.validateForm.reset();
  }

  public searchForm(): void {
    console.log(this.validateForm.value);
    this.dataSet = [
      {
        entreprise:"Black Company",
        nom: 'Joe',
        prenom :'Black',
        telephone:'18345063932',
        address: 'Sidney No. 1 Lake Park'
      }
    ];
  }




}

