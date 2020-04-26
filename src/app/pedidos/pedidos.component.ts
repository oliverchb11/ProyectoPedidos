import { Component, OnInit } from "@angular/core";
import { Pedido } from "../models/pedido";
import { PedidosService } from "../services/pedidos.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.scss"],
})
export class PedidosComponent implements OnInit {
  constructor(public PedidoServicio: PedidosService) {}

  ngOnInit(): void {}

  calcularTotal(posicion) {
    this.PedidoServicio.pedido.actualizarCantidades(posicion);
    this.PedidoServicio.guardarLocalStorage();
  }

  Guardar() {
    this.PedidoServicio.guardarPedido();
  }
  eliminar(posicion: number) {
    this.PedidoServicio.pedido.pedidoDetalle.splice(posicion, 1);
    this.PedidoServicio.guardarLocalStorage();
  }
}
