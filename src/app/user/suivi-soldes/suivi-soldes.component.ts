import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-suivi-soldes.component',
  templateUrl: './suivi-soldes.component.html',
  styleUrls: ['./suivi-soldes.component.css']
})
export class SuiviSoldesComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  p: number = 1;
  
  curentPartenaire={
    entreprise:"Black Company",
  };

  public dataSet: Array<object> = [
    {
      partenaire:"Black Company",
      telephone:'18345063932',
      address: 'Sidney No. 1 Lake Park',
      solde:8000,
      created_at:"02/09/2021",
      updated_at: "02/09/2021"
    },
    {
      partenaire:"Green Company",
      telephone:'13136150063',
      address: 'London No. 1 Lake Park',
      solde:15000,
      created_at:"02/09/2021",
      updated_at: "02/09/2021"
    }
    ,
    {
      partenaire:"Green Company",
      telephone:'13136150063',
      address: 'London No. 1 Lake Park',
      solde:60000,
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

