import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-view-type',
  templateUrl: './produit-view-type.component.html',
  styleUrls: ['./produit-view-type.component.scss']
})
export class ProduitViewTypeComponent implements OnInit {
  listProduits = <any>[];
  routerSub : any;

  constructor(  private produitService: ProduitService,
                private activatedRoute: ActivatedRoute,
                private router: Router){}

  ngOnInit() {
    this.updateProduct();
    this.routerSub = this.activatedRoute.params.subscribe((event) =>{
      this.updateProduct();
    })
    var link = this.router.url.replace('/produits/type/','');
    
  }
  
  ngOnDestroy(){
    this.routerSub.unsubscribe();
  }
  
  updateProduct(){
    this.produitService.getProduitsByType(this.activatedRoute.snapshot.params["type_id"]).subscribe(produits =>
      {
        this.listProduits = produits
      })
  }
}
