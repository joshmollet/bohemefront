import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Produit } from "../models/Produit.model";

@Injectable()

export class ProduitService{
  private produits : Produit[] = [];

  constructor(private httpClient: HttpClient,
              private router: Router){}

  saveProduit() {
    this.httpClient
      .post('http://localhost:8000/api/produit/create', this.produits)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  updateProduit(id: number, produit: Produit){
    return this.httpClient
      .put<Produit>('http://localhost:8000/api/produit/'+id, produit)
      .subscribe(
        () => {
          console.log("Modification faite !");
          this.router.navigate(['/produits/'+id]);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }


  getAllProduits(){
    return this.httpClient.get('http://localhost:8000/api/produit');
  }

  getOneProduit(id: number) {
    return this.httpClient
      .get<any[]>('http://localhost:8000/api/produit/'+id);
    }

  getProduitsByType(id: number){
    return this.httpClient
        .get<any[]>('http://localhost:8000/api/produit/type/'+id);      
    }
}


























// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Produit } from '../models/Produit.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProduitService {

//   constructor(private http: HttpClient) { }
//   public produit$ = new Subject<Produit[]>();

//   getProduit() {
//     this.http.get('http://localhost:8000/api/produit').subscribe(
//       (produit: Produit[]) => {
//         if (produit) {
//           this.produit = produit;
//           this.emitProduit();
//         }
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }

//   emitProduit() {
//     this.produit$.next(this.produit);
//   }
  
// }
