import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.scss']
})
export class ProduitViewComponent implements OnInit {
  produits = <any>[];


  constructor(private produitService: ProduitService,
              private http: HttpClient){}

  ngOnInit() {
    this.produitService.getAllProduits().subscribe(produits =>
      {
        this.produits = produits
      })
  }
}
