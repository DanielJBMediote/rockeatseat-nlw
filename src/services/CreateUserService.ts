import { UserRepositories } from "../repositories/UserRepositories"
import { getCustomRepository } from "typeorm";

interface iUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}


class CreateUserService {

  async execute({ name, email, admin }: iUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email) throw new Error("Email incorrect");

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) throw new Error("User Already Exists");

    const user = userRepository.create({ name, email, admin });

    await userRepository.save(user);

    return user;
  }

}

export { CreateUserService }