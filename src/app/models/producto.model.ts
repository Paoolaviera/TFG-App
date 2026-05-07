export type EstadoProducto = 'disponible' | 'reservado' | 'agotado';

export interface Producto {
  id?: string;

  nombre: string;
  descripcion: string;

  agricultorId: string;
  agricultorNombre: string;

  cantidadDisponible: number;
  unidad: 'kg' | 'cajas' | 'unidades';

  precio: number;

  fechaDisponibilidad: string;
  lote?: string;

  imagenUrl?: string;

  estado: EstadoProducto;

  creadoEn?: Date;
}
