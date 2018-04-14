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

  constructor(private router: Router, private descService: DescService) {
    this.id = this.router.url.split('/')[2]; 
  }

  getRecipe(id: string) {
		this.descService.getRecipe(id).subscribe(
			data => {
        console.log(data[0]);
        this.json = data[0];
        console.log(this.json.nome)
			},
			err => {
				console.log(err);
			});
	}

  ngOnInit() {
    this.getRecipe(this.id);
  }

}
