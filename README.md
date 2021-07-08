<h1 align="center">
    Projeto_FoodCamp
</h1>

<p align="center"> <a href="https://github.com/">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/fevalani/Projeto_FoodCamp?style=for-the-badge">
  </a>
</p>

<h4 align="center"> 
	 Status: Entregue.
</h4>

## Sobre

Oitavo projeto realizado durante o **Bootcamp Responde Aí** do [Responde Aí](https://page.respondeai.com.br/bootcamp). <br>

Segundo projeto usando o React foi a re-implementação do site mobile do FoodCamp, um restaurante especial que entrega seu pedido em 6 minutos.<br>
Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato+Bebida+Sobremesa.<br>
O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.<br>

---

## Requisitos

- Componentização e dados
    - [x]  Os elementos da página devem ser componentizados com React em arquivos separados
    
    - [x]  Os dados dinâmicos da página (como pratos, categorias, etc) devem ser representados como arrays no JavaScript e renderizados na tela


- Seleção de itens
    - [x]  Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 3. É possível selecionar mais de um item da mesma categoria.
    
    - [x]  Quando um item está selecionado, deve aparecer botões permitindo aumentar ou diminuir a quantidade daquele item no pedido
    
    - [x]  Ao diminuir pra zero a quantidade de um item, este deve voltar para o layout anterior (de desmarcado)


- Botão de finalizar pedido
    - [x]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
    
    - [x]  Quando o usuário tiver selecionado os itens das 3 categorias, o botão deve mudar para o estado de habilitado, seguindo layout da tela 5


- Envio do pedido
    - [x]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o **WhatsApp Web**, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida

    - [x]  Essa mensagem deverá seguir este formato:

        ```css
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang (2x)
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27.70
        ```

---

## Layout

O layout da aplicação se encontra no Figma:

<a href="https://www.figma.com/file/nkRQD9TcxvzLQFO27JsGV1/FoodCamp-%5BReact%5D?node-id=0%3A1">
  <img alt="Project Figma" src="https://img.shields.io/badge/%20Layout%20-Figma-%2304D361?style=for-the-badge&logo=appveyor">
</a>

### Mobile

<p align="center">
  <img alt="Desktop Homepage" title="#Homepage" src="public/imagens/readme.png" width="200px" height="355px">
  <img alt="Desktop Homepage" title="#Homepage" src="public/imagens/readme2.png" width="200px" height="355px">
</p>
<p align="center">
  <img alt="Mobile Homepage" title="#Homepage" src="public/imagens/readme3.png" width="200px" height="355px">
</p>

## Tech Used

Foram usadas as seguintes ferramentas para o desenvolvimento do projeto:

- **[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)**
- **[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html5.org/)**
- **[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)**
- **[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)**

#### **Utilities**

- Prototype: **[Figma](https://www.figma.com/)** → **[Protótipo (FoodCamp-React)](https://www.figma.com/file/nkRQD9TcxvzLQFO27JsGV1/FoodCamp-%5BReact%5D?node-id=0%3A1)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fonts: **[Roboto](https://fonts.google.com/specimen/Roboto)**,**[Righteous](https://fonts.google.com/specimen/Righteous)**

---

## Authors

<p>
<a style="border-radius: 50px;" width="100px;" href="https://github.com/fevalani">
 <img style="border-radius: 50px;" src="https://avatars.githubusercontent.com/u/81244714?v=4" width="100px;" alt="Fernando Valani"/>
 <br />
 <sub><b>Fernando Valani</b></sub></a>
 <br />

## </p>

## License

👋🏽 Get in Touch!

---
