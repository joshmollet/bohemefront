import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from './services/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  produits = <any>[];

  constructor(private produitService: ProduitService,
              private http: HttpClient){
                this.http.get('http://localhost:8000/api/produit').subscribe(produits => {
                  this.produits.push(produits);
                  // console.log(this.produits);
                }, error => console.error(error));
              }

  // ngOnInit(){
  //   this.produits = this.produitService.produits;
  // }
}
