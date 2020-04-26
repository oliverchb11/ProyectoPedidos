import { Component, OnInit } from "@angular/core";
import { PedidosService } from "../services/pedidos.service";
import { Pedido } from "../models/pedido";
import { Productos } from "../models/producto";
import { ProductosService } from "../services/productos.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  listadoPedidos: Pedido[] = new Array<Pedido>();
  constructor(
    public PedidoServicio: PedidosService,
    public PruductoServicio: ProductosService
  ) {}

  ngOnInit(): void {}
}
