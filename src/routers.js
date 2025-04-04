import { Router } from "express";
import comandas from "./HandlerCommands.js";

const handler = Router()

const HandlerCommands = new comandas()


//Rotas:

handler.get("/Commands", (req, res) => {
    res.json(HandlerCommands.ListCommands())
})

handler.post("/NewCommand", (req, res) => {
    const { NumberOfCommand } = req.body


    if (!NumberOfCommand) {
        res.json({ message: "Crendencias estão faltando :(" })
        return
    }

    const ComandaExiste = HandlerCommands.VerifyIfCommandExists(NumberOfCommand)

    if (ComandaExiste) {
        res.json({ message: "Comanda já existe :(" })
        return
    }


    HandlerCommands.AddNewCommand(NumberOfCommand)
    res.json({ message: "Comanda criada com sucesso" })
})

handler.post("/NewProductForCommand", (req, res) => {
    const { NumberOfCommand, Product } = req.body

    if (!NumberOfCommand || !Product || !Product.NameProduct || !Product.Price) {
        res.json({ message: "Credencias faltando :(" })
        return
    }
    const Comanda = HandlerCommands.ListCommands().find(c => c.NumberOfCommand == NumberOfCommand);

    if (!Comanda) {
        res.json({ message: "Comanda não existe :(" })
        return
    }

    HandlerCommands.AddNewProductForCommand(NumberOfCommand, Product)

    res.json({ message: `Produto adicionado á comanda numero ${Comanda.NumberOfCommand}` })
})

handler.post("/MergeCommands", (req, res) => {
    const { NumberCommandsForMerge, NumberCommandMain } = req.body
    if (!NumberCommandsForMerge || !NumberCommandMain) {
        res.json({ message: "Crendenciais estão faltando!!!!" })
        return
    }
    NumberCommandsForMerge.forEach(c => {
        if (!HandlerCommands.VerifyIfCommandExists(c)) {
            res.json({ message: `A comanda ${c} não existe :((( ` })
            return
        }
    });
    if (HandlerCommands.VerifyIfCommandExists(NumberCommandMain)) {
        res.json({ message: `A comada ${NumberCommandMain} já existe` })
        return
    }
    HandlerCommands.MergeCommands(NumberCommandsForMerge, NumberCommandMain)
    res.json({ message: "Comanda foi misturada com sucesso :)" })

})

handler.delete("/DeleteCommand", (req, res) => {
    const { NumberOfCommand } = req.body;
    if (!NumberOfCommand) {
        res.json({ message: "As credenciais não estão presentes" })
        return
    }
    if (!HandlerCommands.VerifyIfCommandExists(NumberOfCommand)) {
        res.json({ message: "Comanda não existe" })
        return
    }

    HandlerCommands.DeleteCommand(NumberOfCommand)
    res.json({ message: "Comanda deletada com sucesso :)" })
})
handler.delete("/DeleteProduct", (req, res) => {
    const { NumberOfCommand, idProduct } = req.body;
    if (!NumberOfCommand) {
        res.json({ message: "As credenciais não estão presentes" })
        return
    }
    if (!HandlerCommands.VerifyIfCommandExists(NumberOfCommand)) {
        res.json({ message: "Comanda não existe" })
        return
    }
    if (!HandlerCommands.SelectProduct(NumberOfCommand, idProduct)) {
        res.json({ message: "Produto não existe" })
        return
    }

    HandlerCommands.DeleteProductOfCommand(NumberOfCommand, idProduct)
    res.json({ message: "Produto deletado com sucesso :)" })
})

handler.put("/EditProductName", (req, res) => {
    const { NumberOfCommand, idProduct, NewProductName } = req.body;
    if (!NumberOfCommand) {
        res.json({ message: "As credenciais não estão presentes" })
        return
    }
    if (!HandlerCommands.VerifyIfCommandExists(NumberOfCommand)) {
        res.json({ message: "Comanda não existe" })
        return
    }
    if (!HandlerCommands.SelectProduct(NumberOfCommand, idProduct)) {
        res.json({ message: "Produto não existe" })
        return
    }

    HandlerCommands.EditProductName(NumberOfCommand, idProduct, NewProductName)
    res.json({ message: "Produto editado com sucesso :)" })
})

export default handler;