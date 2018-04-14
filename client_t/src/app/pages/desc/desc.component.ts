import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  json: any;

  constructor() {

  }

  ngOnInit() {
    this.json = {
      "preparacao": [
        "Aloure as amêndoas numa frigideira antiaderente sobre lume moderado.",
        "Tire a pele aos dióspiros e coloque-os num prato.",
        "Salpique-os com a raspa da casca da lima e um pouco do sumo e, na altura de servir, com as amêndoas alouradas."
      ],
      "restricoes": [
        "sem glúten",
        "sem leite",
        "vegetariana"
      ],
      "ingredientes": [
        {
          "unidade": "g",
          "quantidade": "50",
          "desc": "amÃªndoa "
        },
        {
          "unidade": "g",
          "quantidade": "600",
          "desc": "diÃ³spiros"
        },
        {
          "unidade": "",
          "quantidade": "1",
          "desc": "lima"
        }
      ],
      "_id": "5a92454a737d7609f4c93be8",
      "nome": "Dióspiros com amêndoa",
      "dificuldade": "Fácil",
      "dose": "4 pessoas",
      "descricao": "Uma sobremesa de fruta simples para qualquer refeição, que mistura dióspiros com amêndoa e lima. Escolha dióspiros maduros.",
      "tempoPreparacao": "12 min."
    }
  }

}
