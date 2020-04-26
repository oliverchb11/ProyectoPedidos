import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPedidosComponent } from './agregar-pedidos.component';

describe('AgregarPedidosComponent', () => {
  let component: AgregarPedidosComponent;
  let fixture: ComponentFixture<AgregarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
