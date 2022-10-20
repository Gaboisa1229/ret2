import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Parqueadero,
  Administrador,
} from '../models';
import {ParqueaderoRepository} from '../repositories';

export class ParqueaderoAdministradorController {
  constructor(
    @repository(ParqueaderoRepository)
    public parqueaderoRepository: ParqueaderoRepository,
  ) { }

  @get('/parqueaderos/{id}/administrador', {
    responses: {
      '200': {
        description: 'Administrador belonging to Parqueadero',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Administrador)},
          },
        },
      },
    },
  })
  async getAdministrador(
    @param.path.string('id') id: typeof Parqueadero.prototype.id,
  ): Promise<Administrador> {
    return this.parqueaderoRepository.administrador(id);
  }
}
