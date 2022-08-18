export interface MainRepositoryInterface {
    get(params?: any): Promise<any>;
    show(id: number | string): Promise<any>;
    create(payload: any): Promise<any>;
    post(payload: any): Promise<any>;
    update(id: number | string, payload: any): Promise<any>;
    delete(id: number | string): Promise<any>;
  }
  