import Link from 'next/link';

import { useSelector } from 'react-redux';

import sBox from '../../styles/index/Boxes.module.css';

export const Boxes = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sBox.container}>
      <fieldset className={sBox.box}>
        <legend>
          {language === 'en'
            ? 'Developers for oncology'
            : 'Programiści dla onkologii'}
        </legend>
        {language === 'en' ? (
          <p className={sBox.description}>
            We realize how important is advanced technology in medicine,
            especially data science, we also realize how expensive is work of
            data sciencies.
            <br />
            <br />
            Our misson is to try involve their work as open source community.
            Such projects like Linux, OpenOffice, Mozilla, Brave and much more
            are created by open source community.
            <br />
            <br />
            They can work as volontieres giving contribution to oncology and
            gather great expirence at the same time. We believe that open source
            community has big power which can be leverage in oncology research.
            <br />
            <br />
            Data science and oncology are very complex, at the beginning we
            would like to focus on sarcoma. It's rare type of cancer, in this
            field are relatively small amount of research. We would like to
            change it and create solid competencies around this domain. Of
            course we would like to increse our activity step by step to other
            oncology fields.
          </p>
        ) : (
          <p className={sBox.description}>
            Zdajemy sobie sprawę jak ważna jest technologia w medycynie,
            szczególnie nauka o danych (bioinformatyka, uczenie maszynowe,
            itd.), zdajemy sobie również sprawę z tego jak droga jest praca
            specjalistów z tych dziedzin.
            <br />
            <br />
            Naszą misją jest zaangażowac ludzi ze środowiska "open source".
            Projekty takie jak Linux, OpenOffice, Mozilla, Brave i wiele innych
            powstały jako "open source".
            <br />
            <br />
            Chcemy stworzyć miejsce w którym ludzie dobrej woli będą mogli
            pracować nad ciekawymi projektami IT w medycynie jako wolontariusze
            jednosześnie zdobywając cenne doświadczenie. Wierzymy w siłę
            programistów "open source" i że mogą mieć ogromny wpływ na rozwój
            onkologii.
            <br />
            <br />
            Jako, że 'data science' i onkologia są dziedzinami bardzo złożonymi,
            na początkowym etapie organizacja skupia się na mięsakach (łac.
            sarcoma). Są to nowotwory rzadkie, w ich kierunku jest stosunkowo
            mało badań. Chcemy to zmienić i stworzyć solidne kompetencje wokół
            tego zagadnienia. Oczywiście w przyszłości chcemy stopniowo
            zwiększać zasięg działań na pozostałem obszary onkologii.
          </p>
        )}
        <div className={sBox.buttons}>
          <button className={sBox.tbtn}>
            <Link href='/datascience'>data science</Link>
          </button>
        </div>
      </fieldset>
      <fieldset className={sBox.box}>
        <legend>
          {language === 'en' ? 'Fundation as a DAO' : 'Fundacja jako DAO'}
        </legend>
        {language === 'en' ? (
          <p className={sBox.description}>
            The people should have real influence on how organization should
            work.
            <br />
            <br />
            Thanks to DAO (Decentralized Autonoumus Organization) every
            committed person has vote and there is no central authority. On the
            blockchain everythink is transparent and each transaction is
            immutable.
            <br />
            <br />
            To read about how it works click on "Tokenomics" button. To go
            directly into DAO dashboard, click "DAO" button.
          </p>
        ) : (
          <p className={sBox.description}>
            Ludzie powinni mieć realny wpływ na działanie organizacji.
            <br />
            <br />
            Dzięki oprogramowaniu zwanego "Zdecentralizowana Autonomiczna
            Organizacja" z angielskiego DAO (Decentralized Autonoumus
            Organization), wszyscy zaangażowani mają prawo głosu, nie potrzebna
            jest centralna jednostka zarządająca. Na blockchainie wszystko jest
            transparentne i każda transakcja nieodwracalna.
            <br />
            <br />
            Aby dowiedzieć się więcej szczegółów technicznych, kliknij przycisk
            "Tokenomia". Aby udać się bezpośrednio do DAO, kliknij "DAO".
          </p>
        )}
        <div className={sBox.buttons}>
          <button className={sBox.tbtn}>
            <Link href='/tokenomics'>
              {language === 'en' ? 'Tokenomics' : 'Tokenomia'}
            </Link>
          </button>
          <button className={sBox.tbtn}>
            <Link href='/dao'>DAO</Link>
          </button>
        </div>
      </fieldset>
    </div>
  );
};
