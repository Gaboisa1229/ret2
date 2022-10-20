import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Parqueadero} from '../models';
import {ParqueaderoRepository} from './parqueadero.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {

  public readonly parqueadero: BelongsToAccessor<Parqueadero, typeof Administrador.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('ParqueaderoRepository') protected parqueaderoRepositoryGetter: Getter<ParqueaderoRepository>,
  ) {
    super(Administrador, dataSource);
    this.parqueadero = this.createBelongsToAccessorFor('parqueadero', parqueaderoRepositoryGetter,);
  }
}
