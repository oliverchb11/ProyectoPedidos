import { Injectable } from "@angular/core";
import { Pedido } from "../models/pedido";
import { Productos } from "../models/producto";
import { PedidoDetalle } from "../models/pedidoDetalle";

@Injectable({
  providedIn: "root",
})
export class PedidosService {
  pedido: Pedido = new Pedido();

  constructor() {
    this.pedido = this.UltimoPedido;
  }

  guardarLocalStorage() {
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido));
  }

  get UltimoPedido(): Pedido {
    let pedidoLocalStorage: Pedido = new Pedido(
      JSON.parse(localStorage.getItem("ultimoPedido"))
    );
    if (pedidoLocalStorage == null) {
      return new Pedido();
    }
    return pedidoLocalStorage;
  }

  guardarPedido() {
    let ListadoPedido: Pedido[] = new Array<Pedido>();
    ListadoPedido = this.ListadoPedidoLS;
    this.pedido.pedidoId = ListadoPedido.length + 1;
    ListadoPedido.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(ListadoPedido));
    localStorage.removeItem("ultimoPedido");
    this.pedido = new Pedido(null);
  }

  get ListadoPedidoLS(): Pedido[] {
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos"));

    if (pedidos == null) {
      return new Array<Pedido>();
    }
    return pedidos.sort((a, b) => b.pedidoId - a.pedidoId);
  }
}
