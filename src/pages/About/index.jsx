import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ButtonUp from '../../components/ButtonUp';
import { PAGES } from '../../helpers';

import './style.css';

const About = () => {
  return(
    <>
    <Header page={PAGES.about}/>
    <div className='abouttale'>
      <h4>Jak vznikla tato aplikace?</h4>
      <p>Milé děti, milí dospělí, povím Vám pohádku. Usaďte se a přeji pěkné čtení.</p>
      <p>Kdysi dávno, v nemalé vesničce jménem Brno, žila, byla, jedna princezna. Ta princezna byla tuze nešťastná. Její pracovní pozice princezny se jí nelíbila.</p>
      <p>Jednoho dne se však rozhodla, že se stane programátorkou a tak se vydala přes hory a přes kopce do jednoho nedalekého království jménem Czechitas.</p>
      <p>Czechitas bylo krásné království, plné milých, trpělivých, pozitivně naladěných šlechticů a šlechtičen, kteří měli též sny, jako naše princezna. A všichni si navzájem pomáhali těchto snů docílit. Předávali si informace a zkušenosti, učili nejen princezny, ale všechny, kdo si přál změnit svůj osud.</p>
      <p>Princezna se tedy začala v království učit. Nejdřív menšími kroky, kurzy na kódování HTML a CSS, ale poté udělala velký skok. I když se zprvu velmi bála, přihlásila se do Digitální akademie: Web. Digitální akademie nebylo učení pro každého. Bylo to velmi intenzivní učení, které se nikde jen tak nevidí. Závěrem této Digitální akademie byl velký projekt v programovacím jazyku React.</p>
      <p>Princezna však neohroženě bojovala s cykly a poli, probíjela se mezi funkcemi a komponentami. Dokonce, milí čtenáři, musela zvládnout i ternární operátor, či routování. A tak se princezna dostala až k onomu honosnému projektu, jménem Na dobrou noc.</p>
      <p>Ani s projektem to nebylo snadné. Nejdříve princezna měla dělat úplně jiný projekt s jinačí princeznou. Ovšem, co čert nechtěl, druhá princezna se ukázala býti nevhodnou pro spolupráci a tak se ta naše princezna rozhodla, že to zvládne sama. A byl to ten nejlepší krok, jaký mohla učinit. Ovšem byla na to najednou sama.</p>
      <p>Ale nebojte se, nebyla na to tak zcela úplně sama. Každý z týmů princezen měl k ruce vždy nějakého toho krále, či královnu. Králové a královny tu byli vždy, když princezny potřebovali pomoci. Osud tomu tak chtěl, protože naše princezna nesla s královnou, která ji pomáhala, stejné jméno a velmi si rozumněli.</p>
      <p>Projektem spolu prošli s lehkostí a hrdostí, jejich samou. Ke zdárnému konci se dopracovali velmi rychle a ve zbytku času projekt neustále vylepšovali. Až byl konečně hotov.</p>
      <p>A tak jsme tady, princezna šťastně dokončila učení a mohla se s plnou vervou pustit do dalších dobrodružství ve své nové práci, zatím co Vy čtete její první dílo.Její první programátorský počin.</p>
      <p>A na závěr pro vás princezna zanechala jedno poselství. A to zní: Není třeba se bát změnit práci, učit se novým věcem, či zdokonalit starý koníček. Chce to udělat jen první krok. Chcete programovat a dělat takovéto webové aplikace? Tak mrkněte na <a href='https://www.czechitas.cz/' target='_blank'>czechitas.cz</a></p>
    </div>
    <ButtonUp />
    <Footer />
    </>
  );
};

export default About;