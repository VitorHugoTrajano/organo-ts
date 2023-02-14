import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
}

const Colaborador = ({ nome, cargo, imagem, corDeFundo }: ColaboradorProps) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt='' />
            </div>
            <div className='colaborador-rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador