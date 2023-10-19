import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    cpf: string,
    nome: string,
    
}

class CreateUserService{
    async execute({cpf,nome}:UserRequest){

        //verificar se foi enviado o valor do cpf
        if(!cpf){
            throw new Error("Cpf nao enviado!");
        }

        //verifica se o cpf ja foi cadastrado
        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                cpf: cpf
            }
        })

        if(UserAlreadyExists)
        {
            throw new Error("Cpf já cadastrado");
        }

        //const codigoHash = await hash(codigo, 3);

        //cadastrar novo cartao no banco de dados

        const user = await prismaClient.usuario.create({
            data:{
                cpf: cpf,
                nome: nome,
                
            },
            select:{
                id: true,
                cpf: true,
                nome: true,
                
            }
        })

        return{ok:true}
    }
}

export {CreateUserService}