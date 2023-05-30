import { data } from "./database.js"
const cardPrincipal = document.querySelector(".card-principal")

function criarCardItem(produto) {
  let tagLi = document.createElement("li")
  let tagImg = document.createElement("img")
  let tagSpan = document.createElement("span")
  let tagH2 = document.createElement("h2")
  let tagP = document.createElement("p")
  let tagPrice = document.createElement("p")
  let tagBtn = document.createElement("button")

  tagLi.classList.add("card-item")
  tagImg.classList.add("card-item-img")
  tagSpan.classList.add("card-item-section")
  tagH2.classList.add("card-item-name")
  tagP.classList.add("card-item-description")
  tagPrice.classList.add("card-item-price")
  tagBtn.classList.add("card-item-btn")

  tagBtn.id = `${produto.id}`
  tagBtn.innerText = produto.addCart
  tagImg.src = produto.img
  tagImg.alt = produto.nameItem
  tagSpan.innerText = produto.tag[0]
  tagH2.innerText = produto.nameItem
  tagP.innerHTML = produto.description
  tagPrice.innerText = `R$ ${produto.value},00`

  tagLi.append(tagImg, tagSpan, tagH2, tagP, tagPrice, tagBtn)

  return tagLi
}

function listar(arr) {
  cardPrincipal.innerHTML = ""
  arr.forEach((el, index) => {
    let cardItem = criarCardItem(el)
    cardPrincipal.appendChild(cardItem)
  })
}

listar(data)

cardPrincipal.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    adicionarCarrrinho(e.target.id)

    listarItemsCarrinho(carrinho)

    sectionTotalCarrinho(carrinho)
  }
})

let carrinho = []

function adicionarCarrrinho(id) {
  let item = data.find((el) => el.id == id)
  carrinho.push(item)
}

function listarItemsCarrinho(listaCarrinho) {
  const ulCarrinho = document.querySelector(".carrinho")
  ulCarrinho.innerHTML = ""

  listaCarrinho.forEach((el, index) => {
    let li = document.createElement("li")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let price = document.createElement("p")
    let btn = document.createElement("button")
    let div = document.createElement("div")

    img.src = el.img
    img.alt = el.nameItem
    h2.innerText = el.nameItem
    price.innerText = `R$ ${el.value},00`
    btn.id = index
    btn.innerText = "Remover produto"

    li.classList.add("carrinho-item")
    img.classList.add("carrinho-item-img")
    h2.classList.add("carrinho-item-title")
    price.classList.add("carrinho-item-preco")
    btn.classList.add("carrinho-item-btn")

    ulCarrinho.appendChild(li)
    div.append(h2, price, btn)
    li.append(img, div)
  })
}

function criarTagUnica(nome, tagPai, id) {
  const tagP = document.querySelector(tagPai)

  let tagF = document.createElement(nome)
  tagF.id = id

  tagP.appendChild(tagF)
}

criarTagUnica("section", ".card-lateral", "secao-info-carrinho")

function sectionTotalCarrinho(listaCarrinho) {
  const section = document.querySelector("#secao-info-carrinho")

  section.innerText = ""
  let pQuantidade = document.createElement("p")
  let pTotal = document.createElement("p")

  let pQtd = document.createElement("p")
  let pTotal1 = document.createElement("p")

  section.className = "section-info"
  pQuantidade.className = "section-info-qtd"
  pTotal.className = "section-info-total"
  pQtd.className = "section-info-rigth"
  pTotal1.className = "section-info-rigth"

  if (listaCarrinho.length > 0) {
    pQuantidade.innerText = `Quantidade:`
    pQtd.innerText = `${listaCarrinho.length}`

    let totalCarrinho = 0
    listaCarrinho.forEach((el) => {
      totalCarrinho += el.value
    })
    pTotal.innerText = `Total:`
    pTotal1.innerText = `R$ ${totalCarrinho},00`
  } else {
    section.className = ""
    pQuantidade.innerText = ""
    pTotal.innerText = ""
    pQtd.innerText = ""
    pTotal1.innerText = ""
  }
  section.append(pQuantidade, pTotal, pQtd, pTotal1)
}

const btnRemoveCarrinho = document.querySelector(".carrinho")

btnRemoveCarrinho.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    let item = e.target.id

    carrinho.splice(item, 1)

    listarItemsCarrinho(carrinho)

    sectionTotalCarrinho(carrinho)

    if (carrinho.length == 0) {
      const carrinho = document.querySelector(".carrinho")
      const li = document.createElement("li")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")

      h3.innerText = "Carrinho vazio"
      p.innerText = "Adicione itens"

      h3.classList.add("carrinho-alert-1")
      p.classList.add("carrinho-alert-2")

      li.append(h3, p)
      carrinho.appendChild(li)
    }
  }
})

const cabecalhoNav = document.querySelector(".cabecalho-nav")

cabecalhoNav.addEventListener("click", function (e) {
  e.preventDefault()
  mostrarSecaoClicada(e.target.id)
})

function mostrarSecaoClicada(secao) {
  if (secao == "produtos-todos") {
    listar(data)
  }
  if (secao == "produtos-acessorios") {
    let filtrado = data.filter((el) => el.tag[0] == "Acessórios")

    if (filtrado.length == 0) {
      alert("Desculpe! Esta seção está indisponível no momento.")
    } else {
      listar(filtrado)
    }
  }
  if (secao == "produtos-calcados") {
    let filt = data.filter((el) => el.tag[0] == "Calçados")

    if (filt.length == 0) {
      alert("Desculpe! Esta seção está indisponível no momento.")
    } else {
      listar(filt)
    }
  }
  if (secao == "produtos-camisetas") {
    let fil = data.filter((el) => el.tag[0] == "Camisetas")

    if (fil.length == 0) {
      alert("Desculpe! Esta seção está indisponível no momento.")
    } else {
      listar(fil)
    }
  }
}

const barraPesquisa = document.querySelector(".barra-pesquisa")
const btnPesquisar = document.querySelector(".btn-pesquisar")

btnPesquisar.addEventListener("click", function () {
  let value = barraPesquisa.value

  let filtrar = data.filter((el) =>
    el.nameItem.toLowerCase().includes(value.toLowerCase())
  )

  if (filtrar.length == 0) {
    alert("Não encontrado.")
  } else {
    listar(filtrar)
  }
})

barraPesquisa.addEventListener("input", function () {
  if (barraPesquisa.value.trim() == "") {
    listar(data)
  }
})

barraPesquisa.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    let value = barraPesquisa.value

    let filtrar = data.filter((el) =>
      el.nameItem.toLowerCase().includes(value.toLowerCase())
    )

    if (filtrar.length == 0) {
      alert("Não encontrado.")
    } else {
      listar(filtrar)
    }
  }
})
