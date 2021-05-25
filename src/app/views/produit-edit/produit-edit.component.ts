import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/Produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.scss']
})
export class ProduitEditComponent implements OnInit {
  produit !: Produit;
//

  produitForm!: FormGroup;
  //
  // idCtl!: FormControl;
  // nameCtl!: FormControl;
  // descriptionCtl!: FormControl;
  // stockCtl!: FormControl;
  // priceCtl!: FormControl;
  // image_urlCtl!: FormControl;
  // type_idCtl!: FormControl;

  constructor(  private produitService: ProduitService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.produitService.getOneProduit(this.activatedRoute.snapshot.params["id"]).subscribe((produit) =>
      {
        this.produit = produit[0];
        this.initForm();
      })
  } 

  ngOnInit(){}

  initForm(): void{
    this.produitForm = new FormGroup({
      id: new FormControl(this.produit.id, [Validators.required]),
      name: new FormControl(this.produit.name, [Validators.required]),
      description: new FormControl(this.produit.description, [Validators.required]),
      stock: new FormControl(this.produit.stock, [Validators.required]),
      price: new FormControl(this.produit.price, [Validators.required]),
      image_url: new FormControl(this.produit.image_url, [Validators.required]),
      type_id: new FormControl(this.produit.type_id, [Validators.required])
    })

    
    // this.idCtl = this.formBuilder.control(this.produit.id, [Validators.required]);
    // this.nameCtl = this.formBuilder.control(this.produit.name, [Validators.required]);
    // this.descriptionCtl = this.formBuilder.control(this.produit.description, [Validators.required]);
    // this.stockCtl = this.formBuilder.control(this.produit.stock, [Validators.required]);
    // this.priceCtl = this.formBuilder.control(this.produit.price, [Validators.required]);
    // this.image_urlCtl = this.formBuilder.control(this.produit.image_url, [Validators.required]);
    // this.type_idCtl = this.formBuilder.control(this.produit.type_id, [Validators.required]);

    // this.produitForm = this.formBuilder.group({
    //   id: this.idCtl,
    //   name: this.nameCtl,
    //   description: this.descriptionCtl,
    //   stock: this.stockCtl,
    //   price: this.priceCtl,
    //   image_url: this.image_urlCtl,
    //   type_id: this.type_idCtl
    // });
  }

  onSubmitForm() {
    console.log('ok');
    // const formValue = this.produitForm.value;
    // const newProduit = new Produit(
    //   formValue['id'],
    //   formValue['name'],
    //   formValue['description'],
    //   formValue['stock'],
    //   formValue['price'],
    //   formValue['image_url'],
    //   formValue['type_id']
    // );
    // this.produitService.updateProduit(this.activatedRoute.snapshot.params["id"], this.produit);
    // this.produitService.addUser(newUser);
    // this.router.navigate(['/users']);
  }
}
