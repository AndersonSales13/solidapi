import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { ProstgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProvider = new MailTrapMailProvider();
const postgresUsersRepository = new ProstgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
