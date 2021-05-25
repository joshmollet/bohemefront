import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProduitService } from './services/produit.service';
import { ProduitViewComponent } from './views/produit-view/produit-view.component';
import { ProduitViewTypeComponent } from './views/produit-view-type/produit-view-type.component';
import { ProduitDetailComponent } from './views/produit-view-detail/produit-detail.component';
import { HomeComponent } from './views/home/home.component';
import { ProduitEditComponent } from './views/produit-edit/produit-edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produits', component: ProduitViewComponent },
  { path: 'produits/:id', component: ProduitDetailComponent },
  { path: 'produits/:id/edit', component: ProduitEditComponent },
  { path: 'produits/id/:id', component: ProduitDetailComponent },
  { path: 'produits/type/:type_id', component: ProduitViewTypeComponent },
  { path: 'produits/type/:type_id/:id', component: ProduitDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProduitViewComponent,
    ProduitDetailComponent,
    ProduitViewTypeComponent,
    HomeComponent,
    ProduitEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
