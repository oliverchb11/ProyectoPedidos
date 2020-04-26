import { Injectable } from "@angular/core";
import { Clientes } from "../models/cliente";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  constructor() {}

  agregarLocalStorage(cliente: Clientes) {
    let clieteAntiguos: Clientes[] = this.clientesLocalStorage;
    cliente.clienteId = clieteAntiguos.length + 1;
    clieteAntiguos.push(cliente);
    localStorage.setItem("clientes", JSON.stringify(clieteAntiguos));
  }

  get clientesLocalStorage(): Clientes[] {
    let clienteDesdeLocalStorage: Clientes[] = JSON.parse(
      localStorage.getItem("clientes")
    );
    if (clienteDesdeLocalStorage == null) {
      return new Array<Clientes>();
    }
    return clienteDesdeLocalStorage;
  }
}
