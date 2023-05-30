// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 7,
    img: "./img/img-mais-produtos/acessorios/anel-ouro-branco.jpg",
    nameItem: "Ouro Br Diamante Anel",
    description:
      "Ouro branco sólido de 18 quilates, nunca perderá a cor, nunca deixará seus dedos verdes...",
    value: 899,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 8,
    img: "./img/img-mais-produtos/acessorios/conjunto-corrente-colar.jpg",
    nameItem: "Conjunto Corrente Colar",
    description:
      "Esse kit corrente e brinco ponto de luz de Prata é uma joia excelente para mulheres...",
    value: 80,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 9,
    img: "./img/img-mais-produtos/acessorios/oculos-sol-ray.jpg",
    nameItem: "Óculos de Sol Ray Ban",
    description:
      "Unissex Cor da Armação: Preto Cor da Lente: Cinza Gradiente Polarizado Material da Armação...",
    value: 499,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 10,
    img: "./img/img-mais-produtos/acessorios/oculos-sport.jpg",
    nameItem: "Óculos Esportivo Sol",
    description:
      "Apropriado para a equitação/ciclismo, atividades ao ar livre, montanhismo...",
    value: 70,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 11,
    img: "./img/img-mais-produtos/acessorios/oculos-thug-life.jpg",
    nameItem: "Óculos De Sol Thug Life",
    description:
      "Óculos de Sol de Verdade Thug Life. Divertido, funciona como óculos de sol...",
    value: 90,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 12,
    img: "./img/img-mais-produtos/acessorios/pingente-aco.jpg",
    nameItem: "Pingente de Aço Inoxidável",
    description:
      "Nosso Colar Pingente é um presente especial que pode ser dado à família, amigos...",
    value: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 13,
    img: "./img/img-mais-produtos/acessorios/relogio-curren.webp",
    nameItem: "Relógio Curren Masculino",
    description:
      "Relógio masculino padrão casual e/ou esportivo. Os ponteiros menores de fábrica, são decorativos...",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 14,
    img: "./img/img-mais-produtos/acessorios/relogio-tecnos.webp",
    nameItem: "Relógio Technos Feminino",
    description:
      "Relógio Technos feminino com caixa e pulseira de aço dourado. Seu mostrador de fácil leitura...",
    value: 310,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 15,
    img: "./img/img-mais-produtos/calcados/tenis-adidas.jpg",
    nameItem: "Tênis Adidas Streetcheck",
    description:
      "Este modelo é um clássico, e traz consigo o DNA da marca, com muita atitude somada ao conforto...",
    value: 290,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 16,
    img: "./img/img-mais-produtos/calcados/tenis-casual.jpg",
    nameItem: "Tênis Polo Casual",
    description:
      "O modelo Polo é o tênis ideal para você. Com seu design moderno e atemporal...",
    value: 110,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 17,
    img: "./img/img-mais-produtos/calcados/tenis-estilo.jpg",
    nameItem: "Tênis Estilo Botinha",
    description:
      "Misturando o clássico e o moderno o tenis Polo combina com looks casuais até os mais despojados...",
    value: 140,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 18,
    img: "./img/img-mais-produtos/calcados/tenis-ni.webp",
    nameItem: "Tênis Nike Crater",
    description:
      "O mundo de hoje oferece opções. Não há motivo para se questionar com o Nike Crater Remixa...",
    value: 360,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
]

export { data }
