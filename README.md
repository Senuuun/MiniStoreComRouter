# Ajuda na prova pra base React

### Criar projeto React

```bash
npx create-react-app ministore
cd ministore
npm start
```

### Base do código já pronto

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minha Página</title>
  <!-- Para linkar com css -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>
```

### Ajuda a subir código

```bash
cd caminho/para/seu/projeto
git init
git add .
git commit -m "Primeiro commit"
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin master
git push -u origin main
```

### E se você já tiver um código

```bash
cd caminho/para/seu/projeto
git remote -v
git add .
git commit -m "Atualiza funcionalidades X e Y"
git push
```

### E caso use Router

```bash
npm install react-router-dom
```

### Uso do localStorage no React

```js
// Exemplo de como salvar uma lista de produtos no localStorage
const produtosIniciais = [
  { nome: 'Computador', preco: 1800, descricao: 'Computador Desktop' },
  { nome: 'Mouse', preco: 80, descricao: 'Mouse sem fio' },
];
localStorage.setItem('produtos', JSON.stringify(produtosIniciais));

// Para recuperar os produtos:
const produtos = JSON.parse(localStorage.getItem('produtos'));

// Para salvar um produto clicado e mostrar os detalhes depois:
localStorage.setItem('produtoSelecionado', JSON.stringify(produto));

// Para recuperar o produto na tela de detalhes:
const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));
```