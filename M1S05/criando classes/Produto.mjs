class Produtos {
  #nome;
  #preco;
  #emEstoque;
  #quantidade;

  constructor(nome, preco, emEstoque, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }

  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }

  getPreco() {
    return this.#preco;
  }
  setPreco(preco) {
    this.#preco = preco;
  }

  getEmEstoque() {
    return this.#emEstoque;
  }
  setEmEstoque(emEstoque) {
    this.#emEstoque = emEstoque;
  }

  getQuantidade() {
    return this.#quantidade;
  }
  setQuantidade(Quantidade) {
    this.#quantidade = Quantidade;
  }
}
