import { Repository } from 'typeorm';

export abstract class BaseRepository<T>  {
  constructor(protected readonly repository: Repository<T>) {
  }

  async findAll(): Promise<T[]> {
    const entities = await this.repository.find();
    return entities;
  }

  async find(id: string): Promise<T> {
    const entity = await this.repository.findOne(id);
    return entity;
  }

  abstract where(entity: T): Promise<T>;

  async insert(entity: T): Promise<T> {
    await this.repository.save(entity);
    return entity;
  }

  async update(id: string, entity: T): Promise<T> {
    await this.repository.update(id, entity);
    return entity;
  }

  async delete(id: string): Promise<T> {
    const toDelete = await this.repository.findOne(id);
    await this.repository.delete(id);
    return toDelete;
  }

}