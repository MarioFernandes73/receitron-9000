import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescService } from '../../services/desc.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  json: any;
  id: string;
  n_meals = 0;
  n_meals_origin = 0;

  constructor(private router: Router, private descService: DescService) {
    this.id = this.router.url.split('/')[2]; 
  }

  getRecipe(id: string) {
		this.descService.getRecipe(id).subscribe(
			data => {
        console.log(data[0]);
        this.json = data[0];
        console.log(this.json.nome)
        this.n_meals =  +this.json.dose.match(/\d+/g);
        this.n_meals_origin = this.n_meals;
			},
			err => {
				console.log(err);
			});
  }
  
  getConverstion(quant){
    return quant*this.n_meals/this.n_meals_origin;
  }

  ngOnInit() {
    this.getRecipe(this.id);
  }
  }

}

//APAGAR
function getIng(){
  return {
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