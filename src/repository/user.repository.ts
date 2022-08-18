import MainRepository from './main.repository';
import { User } from '../types/user.type';

class UserRepository extends MainRepository<User> {
  constructor() {
    super('users');
  }
}

export default UserRepository;
