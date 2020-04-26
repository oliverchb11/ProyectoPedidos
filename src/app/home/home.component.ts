import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../services/clientes.service";
import { Clientes } from "../models/cliente";
import { PedidosComponent } from "../pedidos/pedidos.component";
import { PedidosService } from "../services/pedidos.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  constructor(
    public ClienteServicio: ClientesService,
    public PedidoServicio: PedidosService,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.clientes = this.ClienteServicio.clientesLocalStorage;
  }
  BuscarClientes(clienteBuscar) {
    let nombreAbuscar: string = clienteBuscar.target.value;
    this.clientes = this.ClienteServicio.clientesLocalStorage.filter(
      (cliente) => {
        return cliente.nombre
          .toLocaleLowerCase()
          .includes(nombreAbuscar.toLocaleLowerCase());
      }
    );
  }

  irAproducto(cliente: Clientes) {
    this.PedidoServicio.pedido.clienteId = cliente.clienteId;
    this.PedidoServicio.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido} `;

    this.route.navigateByUrl("/productos");
  }
}
