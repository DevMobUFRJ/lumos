import arrowLeft from '../Assets/Images/ArrowLeft.png'
import plus from '../Assets/Images/plus.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from "./NavBar/NavBar";
import './Faq.css';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleBackClick = () => {
    navigate('/home');
  };




  const faqs = [
    {
      question: "As embalagens das lâmpadas fornecem as informações sobre as propriedades lumínicas que aparecem no glossário do Lumos?", 
      answer: `Informações que embalagens devem conter são regulamentadas no Brasil pelo INMETRO - Instituto Nacional de Metrologia, Qualidade e Tecnologia. Atualmente, as portarias emitidas por essa autarquia federal contemplam a obrigatoriedade dessas informações nas embalagens de lâmpadas e isso é seguido à risca pelos fabricantes.  No entanto, atenção! Nem todas as fontes de luz normalmente usadas nas residências são consideradas lâmpadas. É o caso dos painéis de LED. LED — Luz emitida por diodos — pode adquirir qualquer formato de bulbo, inclusive assumir a forma de uma luminária. Nesse caso, pode ser que o fabricante não te informe as propriedades, pois é comum a informação só ser dada quando obrigatória.
      O fabricante também pode omitir informação não obrigatória, quando ela não é relevante para o produto. O grau de abertura de lâmpadas difusas é um exemplo disso. Como não há risco de ofuscamento, a informação não é passada. Acontece, por vezes, em lâmpadas com grau igual ou superior a 120°.
      O produto também pode vir sem essas informações se não tiver sido produzido no Brasil e não tiver passado pelo processo habitual de importação. Nesse caso, escolha outro produto para garantir a qualidade de seu consumo. De qualquer forma, se as informações não estiverem nas embalagens, normalmente elas são acessadas no site do fabricante, junto as informações técnicas, pois são informações requeridas pelos projetistas que trabalham com iluminação.`
    },
    {
      question: "Posso escolher as lâmpadas por sua eficiência energética (rendimento luminoso)?",
      answer: "Escolher qualquer fonte de luz apenas por sua eficiência energética não é o mais recomendado. O produto tem que ser bom para seu bolso e para o nosso meio ambiente, mas também para sua saúde física (visão) e psicológica, isto é, precisa ofertar conforto lumínico. O que garante o conforto lumínico são as propriedades lumínicas da luz que interagem com o ambiente e promovem o estímulo luminoso que é percebido pelo usuário. Além disso, atualmente, todas as fontes de luz comercializadas no Brasil economizam energia, então você não corre o risco de adquirir um equipamento que vai onerar sua despesa com a eletricidade da sua casa ou comprometer a sustentabilidade do planeta. O consumo correto então é pelas unidades fotométricas contidas nas embalagens e, caso você encontre mais de um produto com as especificações adequadas para seu ambiente, escolha aquele com valor de potência (watts) mais baixo. Dessa forma você garante maior eficiência da sua iluminação, incluindo a energética."
    },
    {
      question: "Por que não encontro mais lâmpadas incandescentes para consumo nas lojas?",
      answer: "As Lâmpadas incandescentes não são mais encontradas para consumo no Brasil, em virtude da política de desenvolvimento sustentável do Brasil. A Portaria Interministerial MME/MCT/MDI nº 1.007, de 31 de dezembro de 2010 passou a regulamentar os níveis mínimos de eficiência energética de lâmpadas incandescentes, estipulados pelo Inmetro - Instituto Nacional de Metrologia, Normalização e Qualidade Industrial, por meio do Programa Brasileiro de Etiquetagem aplicado a fabricantes e fornecedores desde 1984. Em virtude dessa portaria (BRASIL, 2010), as lâmpadas incandescentes no Brasil foram progressivamente deixando de ser fabricadas e importadas entre os anos de 2010 e de 2016, sendo sua comercialização também gradativamente extinta até 2017."
    },
    {
      question: "Porque não posso escolher minha fonte de luz apenas pela potência (watts)? Porque tenho que conhecer as demais unidades fotométricas da fonte de luz que pretendo adquirir?",
      answer: `Potência ou Fluxo energético é a quantidade de energia a que fonte de luz precisa para emitir luz. É uma informação muito importante, pois mostra a demanda de instalação do sistema elétrico, bem como a eficiência energética do equipamento, uma vez que a razão de fluxo luminoso e potencia é a medida de quão bem o equipamento converte a eletricidade para a luz visível que indica o rendimento luminoso. No entanto, a potência não fornece dados sobre a luz emitida. A escolha da lâmpada por sua potência tem uma explicação histórica que vamos resumir aqui para você. 
      No final do século XIX e início do século XX, quando a utilização da iluminação elétrica estava sendo difundida, havia poucas opções de lâmpadas. As lâmpadas incandescentes eram boas para niveis de luz interior e dominou o mercado por 6 décadas ou mais. Desde 1879, quando foi inventado por Thomas Edison, até 1930, não havia outro equipamento para o projeto de iluminação interior de qualquer programa, inclusive o residencial. 
      Os equipamentos de fonte primária de luz ofereciam quase o mesmo IRC e Temperatura de cor. Suas formas de bulbo eram quase as mesmas, bem como seu ângulo sólido, tendo candela muito semelhante. A única diferença significativa na forma era entre a lâmpada transparente e a lâmpada leitosa. O vidro fosco era um recurso para difundir o fluxo luminoso e reduzir o ofuscamento dos usuários que não estavam habituados à intensidade luminosa da luz elétrica. 
      Não havia muita diferença nas unidades fotométricas para o conforto visual, além da informação sobre o fluxo luminoso que poderia ser indicada, nesse caso, pelo fluxo energético. Naquela época, a potência da lâmpada era realmente a informação mais importante. Não havia a preocupação com o meio ambiente nem com as emissões de carbono, como hoje, mas o fluxo energético do equipamento era muito importante para a instalação do sistema elétrico e para o custo monetário da iluminação, que sempre foi alto. 
      A população aprendeu a fazer a escolha de seus equipamentos pela potencia da fonte de luz (watts) e esta era a única informação na embalagem das lâmpadas. Era uma relação simples entre oferta e demanda. Ao longo do tempo, a ciência do conforto visual, com o interesse em diminuir o custo monetário do sistema de iluminação elétrica e a crescente demanda por reduzir o consumo de energia em busca de um desenvolvimento sustentável, impulsionou pesquisas sobre outras lâmpadas e, hoje em dia, há muitos equipamentos que as pessoas podem ter acesso. Diferente da lâmpada incandescente, esses produtos possuem muita variação entre si e para escolher a melhor opção é necessário saber suas unidades fotométricas que expressam suas propriedades lumínicas.`
    },
    {
      question: "Qual a diferença entre luz geral e luz de destaque?",
      answer: `A luz geral de um ambiente é aquela luz que tem como objetivo iluminar uniformemente o cômodo, eliminando o máximo possível sombras que venham a atrapalhar a realização de tarefas, com a quantidade de energia radiante (luz) ideal para o conforto lumínico do usuário. Essa quantidade ideal é determinada pelo nível de iluminância (lux), que nada mais é do que a relação entre o fluxo luminoso da lâmpada e a metragem quadrada do ambiente (Lm/m²). O nível de iluminância é regulamentado pela ABNT — Associação Brasileira de Normas Técnicas e deve levar em consideração a capacidade visual dos usuários (em termos gerais segue a idade dos usuários) e a refletância das superfícies (capacidade de refletir a luz das paredes, piso e teto). A luz geral não necessariamente deve estar vinculada à disposição dos mobiliários no cômodo (layout), visto que ela é uma luz para o ambiente, e pode ser ofertada por um ou mais de um conjunto de equipamentos (lâmpada e luminária), sempre distribuídos uniformemente, por isso, quando é ofertada só por um conjunto de equipamento, esse fica localizado no centro do ambiente. O Lumos ajuda você a saber quanto de fluxo luminoso cada lâmpada que você usa para a luz geral de cada cômodo deve ter, considerando a quantidade de pontos de luz do ambiente, assim como a quantidade de lâmpada do conjunto de equipamentos utilizado em cada ponto. Interaja com o Lumos através do Light Match.
    	A luz de destaque, por sua vez, é a iluminação usada para destacar superfícies e criar um ambiente mais dinâmico. Diferente da luz geral, essa iluminação visa conduzir a luz para determinadas superfícies, criando diferença proposital de luminosidade. Ela explora as sombras, dando mais dramaticidade ao local e deve dialogar com o layout (disposição dos mobiliários e peças de adorno). Quando a luz de destaque tem como objetivo eliminar as sombras que a luz geral não conseguiu retirar ou sombras criadas pelo posicionamento do usuário, em virtude da distribuição dos móveis, ou ainda compensar a quantidade de luz necessária para realização de alguma tarefa de precisão, ela também é regulamentada pela ABNT. Nesse caso, as superfícies iluminadas com luz de destaque são planos de trabalho como: bancada da cozinha, mesa do escritório, área do espelho do banheiro, entre outros.
      Na luz geral ou na luz de destaque, as luminárias têm um papel fundamental para a iluminação do ambiente junto com as lâmpadas. Pode-se dizer que as luminárias da luz geral devem ofertar uma luz difusa, seja ela pendente, de sobrepor ou de embutir, localizada no teto ou nas paredes. Já as luminárias de luz de destaque são direcionais e, exatamente por isso, deve-se ter uma preocupação maior com o ofuscamento, sempre protegendo a visão de ter contato direto com a fonte de luz.`
    },
    {
      question: "O aplicativo Lumos ajuda na escolha só da lâmpada ou ajuda também a escolher a luminária correta para o ambiente?",
      answer: `Não. O Lumos ajuda a você a identificar as unidades fotométricas que sua fonte de luz deve ter para a luz geral dos cômodos de sua residência, com base nas propriedades lumínicas ideais. Isso vai ajudar a você a procurar no mercado uma lâmpada que lhe atenda e lhe proporcione maior conforto lumínico, o que normalmente se faz sem ajuda de um profissional, principalmente se tratando da reposição de peças. No entanto, o aplicativo não te fornece a especificação da lâmpada, nem da luminária a ser usada.
      Informamos, todavia, que as luminárias têm um papel fundamental para a iluminação do ambiente, junto com as lâmpadas. Além de ornamentar o cômodo, elas são responsáveis pela condução do fluxo luminoso e influenciam tanto na eficiência energética da fonte de luz, como no ofuscamento que essa pode causar. Recomenda-se que as luminárias da luz geral ofertem uma luz difusa, seja ela pendente, de sobrepor ou de embutir, localizada no teto ou nas paredes. Já as luminárias das luzes de destaque, que são mais direcionais, devem proteger a visão de ter contato direto com a fonte de luz. Além disso, as luminárias precisam suportar a potência da lâmpada e estar adequada à instalação elétrica do local.
      Sempre que possível, procure um profissional especializado em lighting design para lhe orientar na iluminação de sua residência, como designers de interiores, arquitetos ou engenheiros.`
    },
    {
      question: "Preciso verificar as propriedades lumínicas quando for comprar um painel de LED?",
      answer: `Muitas pessoas consideram que os painéis de LED são luminárias, mas esse equipamento é uma "lâmpada" no formato de luminária, isto é, emite luz e, por isso, as propriedades lumínicas dessa luz precisam ser verificadas quando o produto for consumido.`    },
    {
      question: "O que é luz geral?",
      answer: `
      A luz geral de um ambiente é aquela luz que tem como objetivo iluminar uniformemente o cômodo, eliminando o máximo possível sombras que venham a atrapalhar a realização de tarefas, com a quantidade de energia radiante (luz) ideal para o conforto lumínico do usuário.
      Essa quantidade ideal é determinada pelo nível de iluminância (lux), nada mais é do que a relação entre o fluxo luminoso da lâmpada e a metragem quadrada do ambiente (Lm/m2). O nível de iluminância é regulamentado pela <strong>ABNT - Associação Brasileira de Normas Técnicas</strong> e deve levar em consideração a capacidade visual dos usuários (em termos gerais segue a idade dos usuários) e a refletância das superfícies (capacidade de refletir a luz das paredes, piso e teto).

      A luz geral não necessariamente deve estar vinculada à disposição dos mobiliários no cômodo (layout), visto que ela é uma luz para o ambiente. Sombras que a luz geral não conseguiu retirar ou sombras criadas pelo posicionamento do usuário, em virtude da distribuição dos móveis, são eliminadas pela luz de destaque. Essa sim tem relação com o layout do ambiente e, normalmente, é direcional, enquanto a luz geral é difusa. ISSO deve ajudar a você a identificar a luz geral do seu cômodo.
      Lembre! Ela pode ser ofertada por um ou mais de um conjunto de equipamentos (lâmpada e luminária), sempre distribuídos uniformemente, por isso, quando é ofertada só por um conjunto de equipamento, esse fica localizado no centro do ambiente.
      O Lumos ajuda você a saber quanto de fluxo luminoso cada lâmpada que você usa para a luz geral de cada cômodo deve ter, considerando a quantidade de pontos de luz do ambiente, assim como a quantidade de lâmpada do conjunto de equipamentos utilizado em cada ponto.
`
    },
    {
      question: "O projeto Atitudes Sustentáveis desenvolve projeto de iluminação?",
      answer: `O projeto Atitudes Sustentáveis é um projeto de extensão que visa levar o conhecimento gerado em pesquisas e ensinado dentro da Universidade para a comunidade externa da UFRJ, mas ele não funciona como um escritório técnico que atenda demanda de projetos particulares. 
      No entanto, se você é uma instituição que de alguma forma realiza um papel social, entre em contato conosco através das nossas redes sociais que estão disponibilizadas aqui no Lumos. O projeto é formado por diversas ações e podemos ver se sua demanda se caracteriza como uma atividade de extensão que possa ser atendida por nossa equipe executora. Atualmente, na área da iluminação, ofertamos dinâmicas, oficinas e palestras. Podemos analisar o desenvolvimento de projeto de luminotécnica institucionais que configurem extensão ou encaminhar essa demanda para projetos que já desenvolvem essa ação.`
    }
  ];

  return (
    <div id="main-screen" className="faq-container">
      <div className="faq-header">
        <div className="back-button-circle" onClick={handleBackClick}>
          <img src={arrowLeft} className="back-button" alt="Voltar" />
        </div>
        <p className="faq-header-title">FAQ</p>
      </div>
      <div id="informations">
        {faqs.map((item, index) => (
          <div key={index} id="row" className="faq-item">
            <div className="faq-question">
              <p className="faq-title-question">{item.question}</p>
              <button
                onClick={() => toggleExpand(index)}
                className="expand-icon"
              >
                <img
                  src={plus}
                  alt="Abrir"
                  className={expandedIndex === index ? "rotated" : ""}
                />
              </button>
            </div>
              <div className={`content ${expandedIndex === index ? 'expanded' : ''}`}>
                {item.answer.split('\n').map((line, lineIndex) => (
                  <p dangerouslySetInnerHTML={{__html: line.trim()}} key={lineIndex}></p>
                ))}
              </div>
          </div>
        ))}
      </div>
      <NavBar colorFaq={true} colorGlossario={false} colorHome={false} colorLightMatch={false}/>
    </div>
  );
};

export default Faq;
