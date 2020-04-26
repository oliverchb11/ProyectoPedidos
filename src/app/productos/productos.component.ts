import { Component, OnInit } from "@angular/core";
import { Productos } from "../models/producto";
import { ProductosService } from "../services/productos.service";
import { PedidosComponent } from "../pedidos/pedidos.component";
import { PedidosService } from "../services/pedidos.service";
import { Pedido } from "../models/pedido";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.scss"],
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();
  listadoPedidos: Pedido[] = new Array<Pedido>();

  constructor(
    public PruductoServicio: ProductosService,
    public PedidoServicio: PedidosService
  ) {}

  ngOnInit(): void {
    this.productos = this.PruductoServicio.productosLocalStorage;
  }

  BuscarProductos(productoBuscar) {
    let nombreAbuscar: string = productoBuscar.target.value;
    this.productos = this.PruductoServicio.productosLocalStorage.filter(
      (producto) => {
        return producto.nombreProducto
          .toLocaleLowerCase()
          .includes(nombreAbuscar.toLocaleLowerCase());
      }
    );
  }
  eliminarProducto() {
    localStorage.removeItem("productos");
  }

  agregar(producto: Productos) {
    var contador = 0;
    this.PedidoServicio.pedido.agregarProductoAlPedido(producto);
    this.PedidoServicio.guardarLocalStorage;

    alert("Producto agregado");
  }
}
