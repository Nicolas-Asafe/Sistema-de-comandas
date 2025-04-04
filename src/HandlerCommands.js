export default class commands {
    #Comandas
    constructor() {
        this.#Comandas = []
        console.log("Class created with sucess.")
    }
    AddNewCommand(NumeroDaComanda) {
        this.#Comandas.push({
            NumberOfCommand: NumeroDaComanda,
            Products: [],
            EndPrice: 0
        })

        console.log("Comanda adicionada com sucesso")
    }
    AddNewProductForCommand(NumeroDaComanda, Produto = { NameProduct: '', Price: 0.0 }) {
        const Comanda = this.#Comandas.find(c => c.NumberOfCommand == NumeroDaComanda);
        Comanda.Products.push({
            NameProduct: Produto.NameProduct,
            Price: Produto.Price,
            id: this.#Comandas.length + 1
        })
        Comanda.EndPrice += Produto.Price

        console.log("Produto adicionado com sucesso!")
    }
    MergeCommands(NumberCommandsForMerge = [], NumberCommandMain) {
        let NewEndPrice = 0;
        const NewNumberCommand = NumberCommandMain;
        let EveryProducts = [];
        NumberCommandsForMerge.forEach(co => {
            const comanda = this.#Comandas.find(c => c.NumberOfCommand === co)
            comanda.Products.forEach(p => {
                EveryProducts.push(p)
                NewEndPrice += p.Price
            })
        })

        this.#Comandas.push({
            NumberOfCommand: NewNumberCommand,
            Products: EveryProducts,
            EndPrice: NewEndPrice
        })

        console.log("Comanda adicionada com sucesso")

    }
    VerifyIfCommandExists(NumberOfCommand) {
        const Comanda = this.#Comandas.find(c => c.NumberOfCommand == NumberOfCommand);
        return Comanda ? true : false
    }
    ListCommands() {
        return this.#Comandas
    }
    DeleteCommand(NumberOfCommandForDelete) {
        const NovaListaComAComandaDeletada = this.#Comandas.filter(c => NumberOfCommandForDelete !== c.NumberOfCommand);

        this.#Comandas = NovaListaComAComandaDeletada
    }
    DeleteProductOfCommand(NumberOfCommandForDeleteProduct, idProduct) {
        const Comanda = this.#Comandas.find(c => c.NumberOfCommand == NumberOfCommandForDeleteProduct);
        const produtosAtualizados = Comanda.Products.filter(p => p.id !== idProduct)

        Comanda.EndPrice -= Comanda.Products.find(p => p.id === idProduct).Price;
        Comanda.Products = produtosAtualizados
    }
    SelectCommand(NumberOfCommand) {
        const Comanda = this.#Comandas.find(c => c.NumberOfCommand == NumberOfCommand);
        return Comanda
    }
    SelectProduct(NumberOfCommand, idProduct) {
        const Product = this.SelectCommand(NumberOfCommand).Products.find(p => p.id === idProduct);
        return Product
    }
    EditProductName(NumberOfCommand, idProduct, NewProductName) {
        const produto = this.SelectProduct(NumberOfCommand, idProduct)

        produto.NameProduct = NewProductName
    }
    SelectMain(num, id) {
        return [this.SelectCommand(num), this.SelectProduct(num, id)]
    }
    ListProducts(NumberCommand) {
        const Comanda = this.SelectCommand(NumberCommand);
        return Comanda.Products
    }
}