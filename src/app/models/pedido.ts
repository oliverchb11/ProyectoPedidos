import { PedidoDetalle } from "./pedidoDetalle";
import { Productos } from "./producto";

export class Pedido {
  pedidoId: number;
  clienteId: number;
  nombreCliente: string;
  total: number;
  pedidoDetalle: Array<PedidoDetalle>;

  constructor(datos?: Pedido) {
    if (datos != null) {
      this.pedidoId = datos.pedidoId;
      this.clienteId = datos.clienteId;
      this.nombreCliente = datos.nombreCliente;
      this.total = datos.total;
      this.pedidoDetalle = datos.pedidoDetalle;
      return;
    }
    this.pedidoId = this.pedidoId;
    this.clienteId = this.clienteId;
    this.nombreCliente = this.nombreCliente;
    this.total = this.total;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }
  agregarProductoAlPedido(producto: Productos) {
    let pedidoDetalle: PedidoDetalle = new PedidoDetalle();
    pedidoDetalle.cantidad = producto.stock;
    pedidoDetalle.nombreProducto = producto.nombreProducto;
    pedidoDetalle.precio = producto.precio;
    pedidoDetalle.productoId = producto.productoId;
    pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;

    let existe: number = this.pedidoDetalle.filter(
      (x) => x.productoId == producto.productoId
    ).length;
    if (existe > 0) {
      let posicion: number = this.pedidoDetalle.findIndex(
        (x) => (x.productoId = producto.productoId)
      );
      this.pedidoDetalle[posicion].cantidad++;
      this.pedidoDetalle[posicion].total =
        this.pedidoDetalle[posicion].cantidad *
        this.pedidoDetalle[posicion].precio;
    } else {
      this.pedidoDetalle.push(pedidoDetalle);
    }
    this.actualizarTotal();
  }

  private actualizarTotal() {
    this.total = 0;
    this.pedidoDetalle.forEach((producto) => {
      this.total = this.total + producto.total;
    });
  }

  public actualizarCantidades(posicion: number) {
    this.pedidoDetalle[posicion].total =
      this.pedidoDetalle[posicion].cantidad *
      this.pedidoDetalle[posicion].precio;

    this.actualizarTotal();
  }
}
