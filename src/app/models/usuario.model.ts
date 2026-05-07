export type RolUsuario = 'agricultor' | 'restauracion' | 'admin';

export interface Usuario {
  uid: string;
  nombre: string;
  email: string;
  rol: RolUsuario;

  telefono?: string;

  // Para usuarios de restauración colectiva
  entidad?: string;
  tipoEntidad?: 'colegio' | 'hospital' | 'residencia' | 'comedor' | 'otro';

  // Para agricultores
  finca?: string;
  ubicacion?: string;

  fechaRegistro?: Date;
}
