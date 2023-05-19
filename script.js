document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault()
  validarNumero()
})

let timeout

function validarNumero() {
  if (timeout) clearTimeout(timeout)
  let inputNumero = document.getElementById('numero')
  let caixaDeMensagem = document.getElementById('mensagem')
  let numero = Number(inputNumero.value)

  if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
    caixaDeMensagem.innerHTML = 'apenas números, seu bobinho'
    caixaDeMensagem.style.display = 'block'
  } else {
    let mensagem = obterMensagem(numero)
    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = 'block'
  }

  timeout = setTimeout(() => {
    caixaDeMensagem.style.display = 'none'
  }, 2000)
}

function obterMensagem(n) {
  if (n <= 0)
    return 'o valor inserido é muito baixo, sua namorada vai chorar se ficar sabendo disso. favor inserir um valor decente.'
  if (n <= 1) return '😢..?'
  if (n <= 2) return '...'
  if (n <= 3) return 'isso é muito pouco!'
  if (n <= 4) return ' eu acho que é mais.'
  if (n <= 5) return 'pode melhorar né?'
  if (n <= 8) return 'ta ficando melhor, ela ta ficando feliz'
  if (n <= 10) return 'que fofo, com certeza ela te ama mais'
  if (n <= 12) return 'ownt..tudo isso?'
  if (n <= 13) return 'ela tem muita sorte em ter voce!'
  if (n <= 15)
    return 'vi da janela, ela ta pulando de felicidade em saber disso 🥺'
  if (n <= 17) return 'ela ainda te ama mais'
  if (n <= 25) return 'nem adianta tentar.'
  if (n <= 30) return 'é por isso que sua namorada escolheu você!'
  if (n <= 40) return 'uau, nem eu esperava isso tudo'
  if (n <= 45) return 'você é tão fofo....'
  if (n <= 50) return 'sua namorada definitivamente te ama mais'
  if (n <= 55) return 'você ainda ta tentando? você não ama mais que ela'
  if (n <= 60)
    return 'até que você ama bastantinho, mas sua namorada claramente ainda ama mais'
  if (n <= 70) return 'nossa..'
  if (n <= 80) return 'você não ama isso tudo, ama?'
  if (n <= 81) return 'tem certeza que ama?'
  if (n <= 85) return 'espero que seja isso tudo mesmo'
  if (n <= 90) return 'até que você ama muito muito <3'
  if (n <= 100) return 'ela mandou avisar que te ama 100x mais.'
  if (n <= 200) return 'ela mandou avisar que te ama 200x mais.'
  if (n <= 300) return 'ela mandou avisar que te ama 300x mais.'
  if (n <= 400) return 'ela mandou avisar que te ama 400x mais.'
  if (n <= 500) return 'ela mandou avisar que te ama 500x mais.'
  if (
    n <=
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
  )
    return 'boa tentativa, mas o amor da sua namorada por você, cujo o valor beira o infinito, ainda é maior.'
}
