import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    cpf: string;
    nome: string;
    numero: string;
    senha: string;
        codigo: string;
}

class AuthUserService{
    async execute({cpf,nome,numero,senha,codigo}:AuthRequest){
       //verificar se o e-mail está cadastrado
       const user = await prismaClient.usuario.findFirst({
        where:{
            cpf: cpf
        }
       })
      //const codigoMatch = await compare(codigo, user.codigo);

       //if(!codigoMatch)
       {
        throw new Error("Dados incorretos!");
       }

        return{ok:true}
    }
}

export {AuthUserService};