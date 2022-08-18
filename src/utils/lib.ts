import * as argon2 from "argon2";
import * as crypto from "crypto";

// const hashingConfig = { 
//     parallelism: 1,
//     memoryCost: 64000, 
//     timeCost: 3 
// }

export const HashUserCredentials = async (
  password: string,
  passwordConfirm: string
) => {
//   const salt = crypto.randomBytes(32);
  const hash1 = await argon2.hash(password, { type: argon2.argon2id });
  const hash2 = await argon2.hash(passwordConfirm, { type: argon2.argon2id });
  password = hash1;
  passwordConfirm = hash2;
  return { hashedPassword: password, hashedPasswordConfirm: passwordConfirm };
};

export const VerifyUserCredentials = async (
  hashedCredentials: any,
  password: string,
  passwordConfirm: string
) => {
  const { hashedPassword, hashedPasswordConfirm } = hashedCredentials;
  const verifiedHash1 = await argon2.verify(hashedPassword, password);
  const verifiedHash2 = await argon2.verify(
    hashedPasswordConfirm,
    passwordConfirm
  );
  return { verifiedHash1, verifiedHash2 };
};
