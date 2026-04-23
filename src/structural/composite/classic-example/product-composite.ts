// Component
export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...product: ProductComponent[]): void {
    this.children.push(...product);
  }

  remove(product: ProductComponent): void {
    const indexProduct = this.children.indexOf(product);
    if (indexProduct != -1) this.children.splice(indexProduct, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const lapis = new ProductLeaf("Lápis", 3);
const caneta = new ProductLeaf("Caneta", 2);
const estojo = new ProductLeaf("Estojo", 10);
const productBox = new ProductComposite();
productBox.add(lapis, caneta, estojo);

const celular = new ProductLeaf("celular", 3_000);
const mouse = new ProductLeaf("mouse", 130);
const teclado = new ProductLeaf("teclado", 100);
const productBox2 = new ProductComposite();
productBox2.add(celular, mouse, teclado, productBox);
console.log(productBox2);
