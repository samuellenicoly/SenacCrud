import {Request , Response } from 'express';
class HierarquiaControllers{
    // conexao assincrona so faço consulta quando existe necessidade 
    // no banco de dados ]
    // nome do metodo 
    async cadastroHierarquia(req: Request, res: Response){
        const{nome} = req.body
        console.log(nome)
    }
}
export {HierarquiaControllers}
// exportar minhas classes e metodos para serem usados nos routers 