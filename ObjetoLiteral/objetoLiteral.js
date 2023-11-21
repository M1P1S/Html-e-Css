const user = {
    nome: "Matheus",
    email:"matheusp135@gmail.com",
    nascimento:"1993/05/31",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Glauciele",
    email: "cielinha.slima@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso() 
admin.exibirInfos()





// user.exibirInfos();
// const exibir = user.exibirInfos
// exibir();

// const exibir = function() {
// console.log(this.nome)
// }

// const exibirNome = exibir.bind(user)
// exibirNome()
// exibir()