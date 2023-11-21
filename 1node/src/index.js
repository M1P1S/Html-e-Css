import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2] }))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoging = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoging)
        return extraiLinks(texto);
    }   catch (erro) {
        trataErro(erro);
    }
}

export default pegaArquivo;



// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//     const encoging = 'utf-8';
//     fs.promises
//       .readFile(caminhoDoArquivo, encoging)
//       .then((texto) => console.log(chalk.green('texto')))
//       .catch(trataErro)
// }

// function pegaArquivo(caminhoDoArquivo) {
//     const encoging = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoging, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }


// Expressões Regulares:são objetos que mapeaiam padrões de texto por meio de uma linguagem própia, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

// \[[^[\]]*?\]

// \(https?:\/\/[^\s?#.].[^\s]*\)

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)