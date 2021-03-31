import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  validateForm: FormGroup;

  public dataSet: Array<object> = [
    {
      partenaire:"Black Company",
      client:"Client Black",
      telephone:'18345063932',
      duree:'2 mois',
      type:"Voitre",
      commition:400,
      etat:3,
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
      etat:3,
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


  public chartOption: object = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Répartition transactions par type de partenaires',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b} : {c} ({%d})'
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },

    
    series: [
      {
        name: 'Type de partenaire',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {
            value: 335,
            name: 'L\’Assurance Temporaire Décès / Invalidité '
          },
          {
            value: 230,
            name: 'L\’Assurance Rente Éducation '
          },
          {
            value: 270,
            name: 'L\’Assurance Retraite '
          },
          {
            value: 312,
            name: 'L\’Assurance Indemnités de Fin de Carrière '
          },
          {
            value: 198,
            name: 'L\’Assurance Automobile'
          },
          // -------------------------------------
          {
            value: 50,
            name: 'L\’Assistance'
          },
          {
            value: 200,
            name: 'La Responsabilité Civile'
          },          {
            value: 130,
            name: 'L\’Assistance'
          },
          {
            value: 20,
            name: 'Les assurances Multirisques pour les entreprises, les particuliers et les professions libérales'
          },
          {
            value: 70,
            name: 'L’assurance de personnes (accidents corporels)'
          }
        ].sort((a, b) => {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255,255,255,.6)'
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255,255,255, .3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0,0,0,.5)'
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: (idx) => {
            return Math.random() * 200;
          }
        }
      }
    ]
  };
  public lineOption: object = {
    title: {
      text: 'Transactions hebdomadaires',
      left: 'center',
      top: 20,
    },
    xAxis: {
      type: 'category',
      data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }],
    
  };
  constructor(private fb: FormBuilder) {
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
    // this.dataSet = [
    //   {
    //     entreprise:"Black Company",
    //     nom: 'Joe',
    //     prenom :'Black',
    //     telephone:'18345063932',
    //     address: 'Sidney No. 1 Lake Park'
    //   }
    // ];
  }

}
