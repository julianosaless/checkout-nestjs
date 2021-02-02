import { Repository } from 'typeorm';

export abstract class BaseRepository<T>  {
  constructor(protected readonly repository: Repository<T>) {
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async find(id: string): Promise<T> {
    return await this.repository.findOne(id);
  }

  async findOne(entity: T): Promise<T> {
    return await this.repository.findOne(entity);
  }

  async insert(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async update(id: string, entity: T): Promise<T> {
    await this.repository.update(id, entity);
    return entity;
  }

  async delete(id: string): Promise<T> {
    const toDelete = await this.find(id);
    await this.repository.delete(id);
    return toDelete;
  }

}