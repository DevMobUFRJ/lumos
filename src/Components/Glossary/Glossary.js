import React from 'react';
import './Glossary.css';
import GlossaryCard from './GlossaryCard';
import NavBar from '../NavBar/NavBar';
import dropdown1 from '../../Assets/Images/glossary-dropdown-1.svg';
import dropdown2 from '../../Assets/Images/glossary-dropdown-2.svg';
import dropdown3 from '../../Assets/Images/glossary-dropdown-3.svg';
import dropdown4 from '../../Assets/Images/glossary-dropdown-4.svg';
import dropdown5 from '../../Assets/Images/glossary-dropdown-5.svg';


const Glossary = () => {
    return (
      <div className='glossary-container'>
        <div className='glossary-page'>
            <div className='glossary-page-upper-text-container'>
                <p className='glossary-page-upper-text'>
                    Explore nosso glossário e descubra a importância das informações que vem nas embalagens dos 
                    produtos:
                </p>
            </div>

            <div className='glossary-page-cards'>
                <GlossaryCard 
                    width='100%'
                    height='60rem'
                    dropdownHeight='50rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    upperText='Fluxo Luminoso'
                    bottomText='Lúmen (Lm)'
                    dropdownImg={dropdown1}
                    dropdownText='É a quantidade de luz emitida pelo equipamento. Deve ser ajustado à sensibilidade do olho humano para permitir a realização de tarefas sem causar ofuscamento. O cálculo do fluxo luminoso depende das dimensões do espaço e dos materiais de revestimento, bem como das atividades que são realizadas no local. Existem tabelas que recomendam o nível de iluminação do ambiente (lux), a relação entre o fluxo luminoso e a área da unidade de sala (lúmen / m²). Nosso aplicativo vai fazer esse cálculo para lhe ajudar a obter a quantidade de lúmen para seu ambiente.'
                />

                <GlossaryCard 
                    width='100%'
                    height='40rem'
                    dropdownHeight='30rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    upperText='Fluxo Energético ou Potência'
                    bottomText='Watts (w)'
                    dropdownImg={dropdown2}
                    dropdownText='É a quantidade de energia elétrica consumida que o equipamento precisa para emitir determinada quantidade de luz (fluxo luminoso). Isso mostra a demanda de instalação de sistema de iluminação elétrica e o consumo elétrico, bem como, a eficiência energética do equipamento. Quanto menos eletricidade o equipamento precisar para a emissão daquela quantidade de fluxo luminoso, maior será sua eficiência energética ou seu rendimento luminoso *** (Lm/W).'
                />

                <GlossaryCard 
                    width='100%'
                    height='70rem'
                    dropdownHeight='60rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    upperText='Intensidade Luminosa'
                    bottomText='Candela (Cd)'
                    dropdownImg={dropdown3}
                    dropdownText='É concentração do fluxo luminoso que se distribui formando um ângulo sólido (o ângulo no espaço tridimensional). Os valores de intensidade luminosa (candela) de uma fonte luminosa são expressos por uma curva, denominada curva de distribuição ou curva zonal. Esta curva depende do ângulo sólido da fonte de luz e da forma do bulbo da lâmpada. Cada tipo de iluminação vai exigir ângulos sólidos específicos e forma de bulbo, de acordo com a necessidade de foco. No caso da luz geral, que demanda uma distribuição mais uniforme possível do fluxo luminoso para proporcionar uma iluminação difusa, a intensidade deve ser sempre a mais baixa possível, sendo recomendado o angulo de abertura do equipamento maior ou igual a 120°. Detalhe! Quando essa informação não estiver na embalagem do produto é porque o angulo é maior ou igual a 120°.'
                />

                <GlossaryCard 
                    width='100%'
                    height='80rem'
                    dropdownHeight='70rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    upperText='Temperatura de Cor ou Aparência da Cor da Emissão da Luz'
                    bottomText='Kelvin (K)'
                    dropdownImg={dropdown4}
                    dropdownText='Temperatura de cor indica a aparência de cor da fonte de luz. Uma temperatura de cor elevada tem uma aparência branca (6500K) e uma baixa temperatura de cor tem uma aparência amarela (3000K). Existem diferentes tipos de branco e amarelo, que são indicados pela unidade Kelvin. Uma aparência de cor neutra está na faixa de 4000K. A aparência branca da luz , considerada uma aparência fria, torna as pessoas mais ativas, enquanto a aparência amarela da luz, considerada uma aparência quente, torna as pessoas mais relaxadas. Em geral, o grupo de lâmpadas com alta temperatura de cor (luz fria) é indicado para espaços com tarefas de precisão. Por outro lado, o grupo de lâmpadas com baixa temperatura de cor (luz quente) é normalmente ideal para espaços de menor concentração, onde o interesse é fazer o lugar aconchegante. No entanto, isso varia de acordo com cada usuário. O importante é não misturar num mesmo acendimento temperaturas de cor distintas. Na duvida, escolha pela luz neutra (4000K).'
                />

                <GlossaryCard 
                    width='100%'
                    height='40rem'
                    dropdownHeight='30rem'
                    padding='0.8rem'
                    borderRadius='1.3rem'
                    upperText='Índice de Reprodução de Cor ou IRC'
                    bottomText='RA'
                    dropdownImg={dropdown5}
                    dropdownText='O indice de reprodução de cor indica quanto a luz da sua fonte (luz artificial) reproduz fielmente as cores de uma objeto ou superficie, comparado com as cores que são percebidas por você quando esse mesmo objeto e superfície é iluminada pela luz do sol (luz natural) ao meio dia. Em uma residência, de modo geral, todas as fontes de luz precisam ter um IRC de bom a excelente, o que varia entre 80RA e 100RA.'
                />
            </div>

            <div className='glossary-page-bottom-text-container'>
                <p className='glossary-page-bottom-text'>
                    Essas são as propriedades lumínicas que você precisa considerar ao adquirir uma equipamento de iluminação. Elas interagem com as superfícies iluminadas e promovem o estímulo lumínico que é captado pelo seu olho e interpretado pelo seu cérebro para gerar sensações. Se a luz percebida por você gera sensação de bem estar, essa luz oferece conforto lumínico, isto é, saúde tanto física(saúde da visão) quanto psicológica. 
                </p>
                <p className='glossary-page-bottom-text'>
                    Sempre selecione equipamentos que são fonte de luz considerando suas unidades fotométricas que medem essas propriedades que listamos aqui e escolha dentro dessa seleção o que apresentar maior rendimento luminoso, isto é maior eficiência energética. No entanto nunca consuma um equipamento só pela eficiência energética. Antes de tudo a iluminação precisa ser eficiente, isto é a luz tem que estar adequada! 
                </p>
                <p className='glossary-page-bottom-text'>
                    Lumos vai ajudar você a encontrar a luz geral mais adequada para seu ambiente!
                </p>
            </div>
        </div>
        <NavBar colorFaq={false} colorGlossario={true} colorHome={false} colorLightMatch={false}/>
      </div>
    );
  };

export default Glossary;