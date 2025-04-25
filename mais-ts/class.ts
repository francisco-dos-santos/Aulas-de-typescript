
class Produto{
  readonly tipo = 'produto'

  private nome:string;

  protected preco:number;

  constructor(nome:string,preco:number){
    this.nome=nome;
    this.preco=preco
  }
  
  getNome(){
    return this.nome
  }

}

class Livro extends Produto{}

const livro = new Produto('Senhor dos Aneis',300)
console.log(livro.getNome())