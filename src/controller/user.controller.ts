import UserService from "@/service/user.service";
import { HashUserCredentials, VerifyUserCredentials } from "@/utils/lib";

export const createUserHandler = async (data: any) => {
  const { email, password, passwordConfirm } = data;
  const exist = await UserService.isUserExist(email);
  console.log("exist", exist);
  try {
    if (!exist) {
      const hashedCredentials = await HashUserCredentials(
        password,
        passwordConfirm
      );
      const verifiedUser = await VerifyUserCredentials(
        hashedCredentials,
        password, 
        passwordConfirm
      );
      const { verifiedHash1, verifiedHash2 } = verifiedUser;
      if (verifiedHash1 && verifiedHash2) {
        const { hashedPassword, hashedPasswordConfirm } = hashedCredentials;
        await UserService.create({
          ...data,
          password: hashedPassword,
          passwordConfirm: hashedPasswordConfirm,
        });
      } else {
        return "Passwords mix match"
      }
      return;
    } else {
      return "Email already exist";
    }
  } catch (err) {
    return err;
  }
};
