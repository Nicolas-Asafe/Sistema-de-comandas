<h1>Como funciona?</h1>
<p>Essa API consegue criar, listar, deletar comandas, juntar comandas, adicionar produtos em comandas, deletar produtos e editar nome de produtos. Aqui está um exemplo em JSON de uma comanda:</p>

```
{
  NumberOfCommand:1,
  Products:[
    {
        NameProduct:"Tênis da Nike",
        Price:245.21,
        id:1
    }
  ]
  EndPrice:245.21
}
```


<h1>Todas as rotas</h1>
<p>No total são 5 rotas que essa API tem:</p>
<h3>/Commands</h3>

```
[
    {
  NumberOfCommand:1
  Products:[
    {
        NameProduct:"Tênis da Nike",
        Price:245.21,
        id:1
    }
  ],
  EndPrice:245.21
}
{
  NumberOfCommand:3
  Products:[
    {
        NameProduct:"Roupa da Gucci",
        Price:542.12
       id:2
    }
  ],
    EndPrice:542.12
}
{
  NumberOfCommand:2
  Products:[
    {
        NameProduct:"Boné da lacoste",
        Price:302.10
        id:3
    }
  ],
  EndPrice:302.10
}
]
```
<p>Essa rota lista todas as comandas com seus produtos.</p>


<h3>/NewCommand</h3>
<h6>BODY JSON:</h6>

```
{
    NumberOfCommand:1
}
```

<h6>RESPONSE:</h6>

```
{message:"Comanda criada com sucesso"}
```

<h3>/NewProductForCommand</h3>

<h6>BODY JSON:</h6>

```
{
    NumberOfCommand:1,
    Product:{
        NameProduct:"Tênis da Nike",
        Price:403.23
    },
}
```

<p>Nesse json coloquei o número da comanda que vai receber um novo produto e o produto.</p>

<h3>/MergeCommands</h3>

<h6>BODY JSON:</h6>

```
{
    NumberCommandsForMerge:[1,2,3],
    NumberCommandMain:10
}
```
<p>Em NumberCommandsForMerge você tem que colocar os números de todas as comandas que você quer juntar e em NumberCommandMain vai ser o número da nova comanda que vai ser todas as comandas juntas</p>

<h6>RESPONSE</h6>

```
{
  NumberOfCommand:1
  Products:[
    {
        NameProduct:"Tênis da Nike",
        Price:245,
        id:1
    },
    {
        NameProduct:"Boné da lacoste",
        Price:302,
        id:2
    },
    {
        NameProduct:"Roupa da Gucci",
        Price:542,
        id:3
    }
  ]
  EndPrice:1.089
}
```


<h3>/DeleteCommand</h3>

<h6>BODY JSON:</h6>

```
{
    NumberOfCommand:10
}
```
<p>Para deletar a comanda basta só criar esse body colocando a propriedade NumberOfCommand com o valor da sua comanda</p>


<h3>/DeleteProduct</h3>

<h6>BODY JSON:</h6>

```
{
    NumberOfCommand:10,
    idProduct:2
}
```
<p>Para deletar um produto, vc tem que colocar o numero da comanda que tem esse tal produto que vc quer deletar,, e dps o id do produto</p>

<h3>/EditProductName</h3>
<p>Para editar o nome de um produto basta colocar as seguintes informações:</p>


<h6>BODY JSON:</h6>

```
{
    NumberOfCommand:10,
    idProduct:3,
    NewProductName:"Roupa do seu Zé"
}
```

<p>E é isso. Dá uma estrelinha aí mn, namoral</p>
