import { Component, OnInit } from "@angular/core";
import { Productos } from "../models/producto";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductosService } from "../services/productos.service";

@Component({
  selector: "app-agregar-productos",
  templateUrl: "./agregar-productos.component.html",
  styleUrls: ["./agregar-productos.component.scss"]
})
export class AgregarProductosComponent implements OnInit {
  producto: Productos = new Productos();
  formularioAgregarProducto: FormGroup;
  constructor(
    private fb: FormBuilder,
    public ProductoServicio: ProductosService
  ) {}

  ngOnInit(): void {
    this.formularioAgregarProducto = this.fb.group({
      nombreProducto: ["", Validators.required],
      stock: ["", Validators.required],
      precio: ["", Validators.required],
      descripcion: ["", Validators.required]
    });
  }

  agregarProducto() {
    this.producto = this.formularioAgregarProducto.value as Productos;
    this.ProductoServicio.agregarLocalStorage(this.producto);
    this.formularioAgregarProducto.reset();
  }
}
