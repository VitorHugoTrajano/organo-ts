import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape-social'>
                <a href='https://pt-br.facebook.com/AluraCursosOnline'><img src='/imagens/fb.png' alt=''/></a>
                <a href='https://twitter.com/AluraOnline'><img src='/imagens/tw.png' alt=''/></a>
                <a href='https://www.instagram.com/aluraonline'><img src='/imagens/ig.png' alt=''/></a>
            </div>
            <img src='/imagens/Logo.png' alt='' />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape;