export class Produit {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public stock: number,
    public price: number,
    public image_url: string,
    public type_id: number
  ){}
}
  