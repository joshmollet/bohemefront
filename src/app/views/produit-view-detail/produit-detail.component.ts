import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit  {
  produit = <any>[];
  zoomable: HTMLElement | undefined;

  constructor(  private produitService: ProduitService,
                private http: HttpClient,
                private router: Router,
                private activatedRoute: ActivatedRoute){}

  ngOnInit() {

    this.produitService.getOneProduit(this.activatedRoute.snapshot.params["id"]).subscribe(produit =>
      {
        this.produit = produit
      })
  }

  funalert(){
    Swal.fire('Ajouté !');
  }
}
