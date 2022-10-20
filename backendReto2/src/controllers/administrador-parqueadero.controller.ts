import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Administrador,
  Parqueadero,
} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorParqueaderoController {
  constructor(
    @repository(AdministradorRepository)
    public administradorRepository: AdministradorRepository,
  ) { }

  @get('/administradors/{id}/parqueadero', {
    responses: {
      '200': {
        description: 'Parqueadero belonging to Administrador',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parqueadero)},
          },
        },
      },
    },
  })
  async getParqueadero(
    @param.path.string('id') id: typeof Administrador.prototype.id,
  ): Promise<Parqueadero> {
    return this.administradorRepository.parqueadero(id);
  }
}
