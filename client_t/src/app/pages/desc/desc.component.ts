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

  constructor(private router: Router, private descService: DescService) {
    let id: string = this.router.url.split('/')[2];
    this.json = this.descService.getRecipe(id); 
  }

  ngOnInit() {
  }

}
