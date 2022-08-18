import { TypesEnum } from '../types/enum.type';
import UserRepository from '../repository/user.repository';

class RepositoryFactory {
  get(name: TypesEnum) {
    switch (name) {
      case TypesEnum.USER:
        return new UserRepository();
    }
  }
}

export default new RepositoryFactory();
