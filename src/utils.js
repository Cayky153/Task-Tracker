export function validacao(palavra) {
    if (!palavra) {

        return {
            ok: false,
            erro: 'vazio'
        }
    }

    if (typeof palavra != 'string') {
        return {
            ok: false,
            erro: 'tipo'
        }
    }
    return { ok: true }
} { }

export function validarOuSair(arg, mensagem) {
    const { ok } = validacao(arg)

    if (!ok) {
        console.error(mensagem)
        process.exit(1);
    }
    return true;
} { }


