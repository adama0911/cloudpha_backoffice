import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

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
      partenaire:"Black Company",
      client:"Client Black",
      telephone:'18345063932',
      duree:'2 mois',
      type:"Voitre",
      commition:400,
      etat:1,
      created_at:"02/09/2021",
      updated_at: "02/09/2021"
    },
    {
      partenaire:"Green Company",
      telephone:'13136150063',
      client:"client Green",
      duree:'6 mois',
      type:"Vie",
      commition:500,
      etat:2,
      created_at:"02/09/2021",
      updated_at: "02/09/2021"
    },
    {
      partenaire:"Red Company",
      telephone:'13136150063',
      client:"client Red",
      duree:'9 mois',
      type:"Vie",
      commition:200,
      etat:3,
      created_at:"02/09/2021",
      updated_at: "02/09/2021"
    },
  ];

  public columns: Array<object> = [
    {
      title: "Partenaire",
    },
    {
      title:"Téléphone",
    },
    {
      title:"type",
    },
    {
      title:"Durée",
    },
    {
      title:"Commition",
    },
    {
      title:"État",
    },
    {
      title:"Création",
    },
    {
      title:"Mise à jour",
    }
    ,
    {
      title:"Action",
    }
  ];



  constructor(private fb: FormBuilder,private modalService: NzModalService) {
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

