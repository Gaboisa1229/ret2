import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Administrador} from './administrador.model';

@model()
export class Parqueadero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => Administrador)
  administradorId: string;

  constructor(data?: Partial<Parqueadero>) {
    super(data);
  }
}

export interface ParqueaderoRelations {
  // describe navigational properties here
}

export type ParqueaderoWithRelations = Parqueadero & ParqueaderoRelations;
