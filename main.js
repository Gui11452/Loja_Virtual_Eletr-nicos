const navOculta = document.querySelector('.navegacao-oculta');
const botao = document.querySelector('.botao');
const botaoSpan = document.querySelectorAll('.botao span');
const [a, b, c] = botaoSpan;

const botaoFiltro = document.querySelector('.botao-filtro');
const botaoFiltroi = document.querySelector('.botao-filtro i');
const filtros = document.querySelector('.botao-filtro div');

const botaoParcela = document.querySelector('.botao-parcela');
const botaoParcelai = document.querySelector('.botao-parcela i');
const parcelas = document.querySelector('.parcelas');

const avaliacaoFormP = document.querySelector('.avaliacao-form .avaliacao-p p');
const avaliacaoFormStars = document.querySelectorAll('.avaliacao-form .avaliacao-p i');
const [um, dois, tres, quatro, cinco] = avaliacaoFormStars;

const avaliacaoTagA = document.querySelector('.avaliacao a');

const conta = document.querySelector('.conta');
const pedidos = document.querySelector('.pedidos');

const abaConta = document.querySelector('.aba-conta');
const abaPedidos = document.querySelector('.aba-pedidos');
const abaContai = document.querySelector('.aba-conta i');
const abaPedidosi = document.querySelector('.aba-pedidos i');
const abaContap = document.querySelector('.aba-conta p');
const abaPedidosp = document.querySelector('.aba-pedidos p');


document.addEventListener('click', e => {

    const el = e.target;
    console.log(el)
    if(el == botao || el == a || el == b || el == c){
        console.log('ee')
        navOculta.classList.toggle('navegacao-oculta-visivel');
        a.classList.toggle('um');
        b.classList.toggle('dois');
        c.classList.toggle('tres');
    }
    if(el == botaoFiltro || el == botaoFiltroi){
        filtros.classList.toggle('filtro-visivel');
    }

    if(el == botaoParcela || el == botaoParcelai){
        parcelas.classList.toggle('parcelas-invisivel');
    }

    if(el == abaConta || el == abaContai || el == abaContap){
        abaConta.classList.add('backgroundAbaCinza');
        abaConta.classList.remove('backgroundAbaBranco');
        abaPedidos.classList.remove('backgroundAbaCinza');
        abaPedidos.classList.add('backgroundAbaBranco');
        conta.classList.add('mostrar-conta');
        conta.classList.remove('esconder-conta');
        pedidos.classList.add('esconder-pedidos');
        pedidos.classList.remove('mostrar-pedidos');
    }
    if(el == abaPedidos || el == abaPedidosi || el == abaPedidosp){
        abaConta.classList.remove('backgroundAbaCinza');
        abaConta.classList.add('backgroundAbaBranco');
        abaPedidos.classList.add('backgroundAbaCinza');
        abaPedidos.classList.remove('backgroundAbaBranco');
        conta.classList.add('esconder-conta');
        conta.classList.remove('mostrar-conta');
        pedidos.classList.add('mostrar-pedidos');
        pedidos.classList.remove('esconder-pedidos');
    }

    if(el == avaliacaoTagA){
        e.preventDefault();
        const id = avaliacaoTagA.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        scroll({
            top: to - 80,
            behavior: 'smooth'
        })
    }

    if(el == um){
        um.classList.add('star-amarela');
        dois.classList.add('star-branca');
        tres.classList.add('star-branca');
        quatro.classList.add('star-branca');
        cinco.classList.add('star-branca');
        um.classList.remove('star-branca');
        dois.classList.remove('star-amarela');
        tres.classList.remove('star-amarela');
        quatro.classList.remove('star-amarela');
        cinco.classList.remove('star-amarela');
    }

    if(el == dois){
        um.classList.add('star-amarela');
        dois.classList.add('star-amarela');
        tres.classList.add('star-branca');
        quatro.classList.add('star-branca');
        cinco.classList.add('star-branca');
        um.classList.remove('star-branca');
        dois.classList.remove('star-branca');
        tres.classList.remove('star-amarela');
        quatro.classList.remove('star-amarela');
        cinco.classList.remove('star-amarela');
    }

    if(el == tres){
        um.classList.add('star-amarela');
        dois.classList.add('star-amarela');
        tres.classList.add('star-amarela');
        quatro.classList.add('star-branca');
        cinco.classList.add('star-branca');
        um.classList.remove('star-branca');
        dois.classList.remove('star-branca');
        tres.classList.remove('star-branca');
        quatro.classList.remove('star-amarela');
        cinco.classList.remove('star-amarela');
        
    }

    if(el == quatro){
        um.classList.add('star-amarela');
        dois.classList.add('star-amarela');
        tres.classList.add('star-amarela');
        quatro.classList.add('star-amarela');
        cinco.classList.add('star-branca');
        um.classList.remove('star-branca');
        dois.classList.remove('star-branca');
        tres.classList.remove('star-branca');
        quatro.classList.remove('star-branca');
        cinco.classList.remove('star-amarela');
    }

    if(el == cinco){
        um.classList.add('star-amarela');
        dois.classList.add('star-amarela');
        tres.classList.add('star-amarela');
        quatro.classList.add('star-amarela');
        cinco.classList.add('star-amarela');
        um.classList.remove('star-branca');
        dois.classList.remove('star-branca');
        tres.classList.remove('star-branca');
        quatro.classList.remove('star-branca');
        cinco.classList.remove('star-branca');
    }

})

document.addEventListener('mouseover', e => {

    const el = e.target;

    if(el == um){
        avaliacaoFormP.innerHTML = 'Péssimo';
        um.classList.add('star-amarela-hover');
        dois.classList.remove('star-amarela-hover');
        tres.classList.remove('star-amarela-hover');
        quatro.classList.remove('star-amarela-hover');
        cinco.classList.remove('star-amarela-hover');
    }

    if(el == dois){
        avaliacaoFormP.innerHTML = 'Ruim';
        um.classList.add('star-amarela-hover');
        dois.classList.add('star-amarela-hover');
        tres.classList.remove('star-amarela-hover');
        quatro.classList.remove('star-amarela-hover');
        cinco.classList.remove('star-amarela-hover');
    }

    if(el == tres){
        avaliacaoFormP.innerHTML = 'Médio';
        um.classList.add('star-amarela-hover');
        dois.classList.add('star-amarela-hover');
        tres.classList.add('star-amarela-hover');
        quatro.classList.remove('star-amarela-hover');
        cinco.classList.remove('star-amarela-hover');
    }

    if(el == quatro){
        avaliacaoFormP.innerHTML = 'Bom';
        um.classList.add('star-amarela-hover');
        dois.classList.add('star-amarela-hover');
        tres.classList.add('star-amarela-hover');
        quatro.classList.add('star-amarela-hover');
        cinco.classList.remove('star-amarela-hover');
    }

    if(el == cinco){
        um.classList.add('star-amarela-hover');
        dois.classList.add('star-amarela-hover');
        tres.classList.add('star-amarela-hover');
        quatro.classList.add('star-amarela-hover');
        cinco.classList.add('star-amarela-hover');
        avaliacaoFormP.innerHTML = 'Ótimo';
    }

})

document.addEventListener('mouseout', e => {

    const el = e.target;

    if(el == um){
        um.classList.remove('star-amarela-hover');
        avaliacaoFormP.innerHTML = '';
    }

    if(el == dois){
        um.classList.remove('star-amarela-hover');
        dois.classList.remove('star-amarela-hover');
        avaliacaoFormP.innerHTML = '';
    }

    if(el == tres){
        um.classList.remove('star-amarela-hover');
        dois.classList.remove('star-amarela-hover');
        tres.classList.remove('star-amarela-hover');
        avaliacaoFormP.innerHTML = '';
    }

    if(el == quatro){
        um.classList.remove('star-amarela-hover');
        dois.classList.remove('star-amarela-hover');
        tres.classList.remove('star-amarela-hover');
        quatro.classList.remove('star-amarela-hover');
        avaliacaoFormP.innerHTML = '';
    }

    if(el == cinco){
        um.classList.remove('star-amarela-hover');
        dois.classList.remove('star-amarela-hover');
        tres.classList.remove('star-amarela-hover');
        quatro.classList.remove('star-amarela-hover');
        cinco.classList.remove('star-amarela-hover');
        avaliacaoFormP.innerHTML = '';
    }

})