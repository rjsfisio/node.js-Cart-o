import { Request, Response } from "express";
import { AuthUserService} from "../../services/user/AuthUserService";

class AuthUserController{

    async handle(req: Request, res: Response){
        const {cpf, nome, numero, senha, codigo} = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({
            cpf,
            nome,
            numero,
            senha,
            codigo
        })

        return res.json(auth);
    
    }
}

export {AuthUserController}