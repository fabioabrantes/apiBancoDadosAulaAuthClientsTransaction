import { prisma } from '../database/repositoryClient';
import { hash } from 'bcrypt';

import Client from './entities/Client';

type Params = {
  cpf: string;
  name: string;
  username: string;
  password: string;
  latitude: string;
  longitude: string;
}
export class RegisterClientCaseUse {

  async execute({ cpf, name, latitude, longitude, password, username }: Params) {
    //validação dos campos
    console.log(cpf, name, latitude, longitude, password, username);
    // verificar se o client já está cadastrado
    const client = await prisma.client.findUnique({
      where: {
        cpf,
      }
    })
    console.log(client)
    if (client !== null) {
      return { message: 'client já existe' }
    }


    const passwordCrypted = await hash(password, 2);
    const ClientNew = await prisma.client.create({
      data: {
        cpf,
        name,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        password: passwordCrypted,
        username,
        transactions: {
          create: {
            type: 'credits',
            amount: 100
          }
        }
      },
      include: {
        transactions: true,
      }

    });

    return ClientNew
  }
}