import { MainRepositoryInterface } from '../interface/main.interface';

class MainRepository<T> implements MainRepositoryInterface {
  constructor(public resource: String) {}
    get(params?: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    show(id: string | number): Promise<any> {
        throw new Error('Method not implemented.');
    }
    create(payload: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    post(payload: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    update(id: string | number, payload: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    delete(id: string | number): Promise<any> {
        throw new Error('Method not implemented.');
    }

}

export default MainRepository;
