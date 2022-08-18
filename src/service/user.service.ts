import { UserInterface } from "./../interface/user.interface";
import { User } from "../model/user.model";
import RepositoryFactory from "../repository/factory.repository";
import { TypesEnum } from "../types/enum.type";

class UserService {
  private static instance: UserService;
  private api: UserInterface;

  private constructor() {
    this.api = RepositoryFactory.get(TypesEnum.USER) as UserInterface;
  }

  public static getInstance(): UserService {
    if (!UserService.instance) UserService.instance = new UserService();
    return UserService.instance;
  }

  public static async create(data: any) {
    const newUser = new User(data);
    await newUser.save();
  }

  public static async isUserExist(email: string) {
    return await User.findOne({
      where: {
        email: email
       }
    }, "email").exec();
  };
}

export default UserService;
