exports.maior = function(alunos){
    let maiorNota = 0;
    let AlunoNotaMaior = '';

    for (const aluno of alunos) {
        if (aluno.nota > maiorNota) {
            maiorNota = aluno.nota;
            AlunoNotaMaior = aluno.nome;
        }
    }

    return {maiorNota, AlunoNotaMaior};
}

exports.menor = function(alunos){
    let menorNota = Infinity;
    let AlunoNotaMenor = '';

    for (const aluno of alunos) {
        if (aluno.nota < menorNota) {
            menorNota = aluno.nota;
            AlunoNotaMenor = aluno.nome;
        }
    }

    return {menorNota, AlunoNotaMenor};
}

exports.media = function(alunos){
    let somaNotas = 0;
    for(const aluno of alunos) {
        somaNotas += aluno.nota;
    }
    return somaNotas / alunos.length;
}

exports.AprovadosReprovados = function(alunos){
    let aprovados = 0;
    let reprovados = 0;

    for (const aluno of alunos){
        if (aluno.nota >= 60){
            aprovados++;
        } else {
            reprovados++;
        }
    }

    return {aprovados, reprovados};
}
