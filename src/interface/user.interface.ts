import { MainRepositoryInterface } from '../interface/main.interface'

export interface UserInterface extends MainRepositoryInterface {
  create(data: any): Promise<any>;
  update(id: number | string, data: any): Promise<any>;
  delete(id: string): Promise<any>;
}