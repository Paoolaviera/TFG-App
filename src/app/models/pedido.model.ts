export type EstadoPedido =
  | 'pendiente'
  | 'aceptado'
  | 'preparado'
  | 'entregado'
  | 'cancelado';

export interface ProductoPedido {
  productoId: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  precio: number;
  subtotal: number;
  agricultorId: string;
}

export interface Pedido {
  id?: string;

  clienteId: string;
  clienteNombre: string;
  entidad?: string;

  productos: ProductoPedido[];

  fechaPedido: string;
  fechaEntregaPrevista: string;

  estado: EstadoPedido;

  total: number;

  observaciones?: string;
}
