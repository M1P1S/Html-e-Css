import User from "./User.js";

export default class Docente extends User {
    constructor(name, email, nascimento, role = 'docente', ativo = true) {
        super(name, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}.`
    }
}



