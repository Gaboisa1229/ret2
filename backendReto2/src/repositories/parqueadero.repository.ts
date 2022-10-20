import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Parqueadero, ParqueaderoRelations, Administrador} from '../models';
import {AdministradorRepository} from './administrador.repository';

export class ParqueaderoRepository extends DefaultCrudRepository<
  Parqueadero,
  typeof Parqueadero.prototype.id,
  ParqueaderoRelations
> {

  public readonly administrador: BelongsToAccessor<Administrador, typeof Parqueadero.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>,
  ) {
    super(Parqueadero, dataSource);
    this.administrador = this.createBelongsToAccessorFor('administrador', administradorRepositoryGetter,);
  }
}
