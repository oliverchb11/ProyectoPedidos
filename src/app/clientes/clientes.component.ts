import { Component, OnInit } from "@angular/core";
interface Clientes {
  nombre: string;
  apellido: string;
  edad: number;
}
interface Productos {
  nombreProducto: string;
  cantidad: number;
  precio: number;
}
@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"]
})
export class ClientesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guardarCliente() {
    let clientesAgregar: Array<Clientes> = new Array<Clientes>();
    clientesAgregar.push(
      {
        nombre: "oliver",
        apellido: "charry",
        edad: 25
      },
      {
        nombre: "Mateo",
        apellido: "Alvarez",
        edad: 22
      }
    );
    localStorage.setItem("clientes", JSON.stringify(clientesAgregar));
  }
  guardarProducto() {
    let productosAgregar: Array<Productos> = new Array<Productos>();
    productosAgregar.push(
      {
        nombreProducto: "Papas",
        cantidad: 30,
        precio: 20000
      },
      {
        nombreProducto: "tomates",
        cantidad: 40,
        precio: 30000
      }
    );
    localStorage.setItem("producto", JSON.stringify(productosAgregar));
  }
  eliminarProductos() {
    localStorage.removeItem("producto");
  }
  eliminarClientes() {
    localStorage.removeItem("clientes");
  }
  limpiarClientes() {
    localStorage.clear();
  }
  get ClienteLocales(): Clientes[] {
    let clienteslocalStorage: Clientes[] = JSON.parse(
      localStorage.getItem("clientes")
    );
    if (clienteslocalStorage == null) {
      return new Array<Clientes>();
    }
    return clienteslocalStorage;
  }
  get ProductoLocales(): Productos[] {
    let productolocalStorage: Productos[] = JSON.parse(
      localStorage.getItem("producto")
    );
    if (productolocalStorage == null) {
      return new Array<Productos>();
    }
    return productolocalStorage;
  }
}
