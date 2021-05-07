import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { SoldesService } from 'src/app/service/soldes.service';
import { TransactionsService } from 'src/app/service/transactions.service';

@Component({
  selector: 'app-suivi-soldes.component',
  templateUrl: './suivi-soldes.component.html',
  styleUrls: ['./suivi-soldes.component.css']
})
export class SuiviSoldesComponent implements OnInit {
  validateForm: FormGroup;
  PositionnementForm: FormGroup;
  isVisible = false;
  p: number = 1;
  montantPosition=0;
  public erreur = 0
  
  curentPartenaire={
    nom:"Black Company",
    id:0
  };

  public dataSet: Array<object> = [
    {
      adresse: "mbour",
      created_at: "24/04/2021",
      id: 3,
      nom: "chez seynabou",
      solde: 500,
      tel: "779013878",
      type: "pharm",
    }
  ];

  public columns: Array<object> = [
    {
      title: "Pharlacie",
    },
    {
      title:"Téléphone",
    },
    {
      title:"Adresse",
    },
    {
      title:"Solde",
    },
    {
      title:"Creation",
    },
    {
      title:"Mise à jour",
    }
    ,
    {
      title:"Action",
    }
  ];


  constructor(private fb: FormBuilder,private modalService: NzModalService,private _tranService:SoldesService) {
  }

  showModal(curentPartenaire): void {
    this.curentPartenaire=curentPartenaire;
    this.isVisible = true;
    this.erreur = 0
  }

  handleOk(): void {
    let a = 4;
    let b = 34;
    let  x =89;
    let z = (a*x*x*x)+b
    
    // this.isVisible = false;
    console.log(this.curentPartenaire)
    this._tranService.posistionnerPharmacie({idShop:this.curentPartenaire.id,montant:this.PositionnementForm.value.montantPosition,a:a,b:b,z:z}).then(rep=>{
      console.log(rep)
      if(rep.status==1){
        this.getPharmacies();
        this.isVisible = false;
      }else{
        this.erreur = 1
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: '',
      state: ''
    });

    this.PositionnementForm = this.fb.group({
      montantPosition: 0,
    });


    this.getPharmacies();
   
  }

  getPharmacies(){
    this._tranService.getPharmacies({}).then(rep=>{
      console.log(rep.pharm);
      if(rep.pharm && rep.pharm.length!=0){
        this.dataSet = []
        rep.pharm.forEach(element => {
          this.dataSet.push({
              adresse: element.adresse,
              created_at: (new Date(element.created_at)).toLocaleDateString() ,
              id: element.id,
              nom: element.nom,
              solde: element.solde,
              tel: element.tel,
              type: element.type,
              updated_at: (new Date(element.updated_at)).toLocaleDateString()
          })
        });

        console.log(this.dataSet)
      }else if(rep.pharm.length==0){
        this.dataSet = []
      }else{
        this.dataSet = []
      }
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

