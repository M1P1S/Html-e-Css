import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, nascimento, role = 'adimin', ativo = true) {
        super(name, email, nascimento, role, ativo)
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

