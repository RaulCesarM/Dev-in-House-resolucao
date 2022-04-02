class Pedido {
  #numeroPedido; // id
  #dataPedido; // date
  #estaPago = false; //boolean
  #listaProdutos = [];
  #nomeCliente;

  constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
    this.#numeroPedido = numeroPedido;
    this.#dataPedido = dataPedido;
    this.#estaPago = estaPago;
    this.listaProdutos = listaProdutos;
    this.#nomeCliente = nomeCliente;
  }
  getNumeroPedido() {
    return this.#numeroPedido;
  }
  setNumeroPedido(nPedido) {
    this.#numeroPedido = nPedido;
  }

  getDataPedido() {
    return this.#dataPedido;
  }
  setDataPedido() {       
    this.#dataPedido = new Date().toLocaleDateString("pt-BR");
  }

  getEstaPago() {
    return this.#estaPago;
  }
  setEstaPago(isPago) {
    this.#estaPago = isPago;
  }

  getListaProdutos() {
    return this.#listaProdutos;
  }
  setListaProdutos(LiProd) {
    this.#listaProdutos = LiProd;
  }

  getNomeCliente() {
    return this.#nomeCliente;
  }
  setNomeCliente(nome) {
    this.#nomeCliente = nome;
  }
}
