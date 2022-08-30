import { Experience } from "@ui-molecules/Experience/Experience";
import styles from "./ExperienceTimeline.module.css";

interface ExperienceTimelineProps {
  experiences: Experience[];
  onSelect: (id: Experience["id"]) => void;
}

export function ExperienceTimeline({
  experiences,
  onSelect,
}: ExperienceTimelineProps) {
  return (
    <ol className={styles.timeline}>
      {experiences.map(({ company, startDate, endDate, id }, index) => (
        <Experience
          onClick={() => onSelect(id)}
          key={index}
          company={company}
          startDate={startDate}
          endDate={endDate}
          id={id}
        >
          Intergamma is de organisatie achter de doe-het-zelf-formules GAMMA en
          KARWEI. Met bijna 400 bouwmarkten in Nederland en België zijn ze een
          grote speler op de doe-het-zelfmarkt en in Europa horen ze bij de 15
          grootsten.
        </Experience>
      ))}
    </ol>
  );
}

/*


      <Experience company="KLM" startDate="Maart 2021" endDate="Maart 2022">
        Bij luchtvaartmaatschappij KLM heeft Randy als Front-end Software
        engineer mogen ontwikkelen aan een webapplicatie. Deze applicatie wordt
        gebruikt door een groot deel van KLM gebruikt om de dagelijkse
        operationele beslissingen te kunnen maken.
      </Experience>
      <Experience
        company="Nova Clima"
        startDate="Februari 2020"
        endDate="Oktober 2020"
      >
        Nova Clima is een airconditioninginstallatie bedrijf. Bij Nova Clima was
        Randy verantwoordelijk voor het digitaliseren van de bedrijfsprocessen.
        Met name de processen rondom het maken van calculaties, offertes,
        facturatie, voorraad en planning waren de bottlenecks.
      </Experience>
      <Experience
        company="React Component library"
        startDate="December 2019"
        endDate="Oktober 2021"
      >
        React Component library is een project van Randy. Met zijn visie dat de
        front-end van een webapplicatie steeds belangrijker wordt, door zijn
        interesse in UX-design en zijn ervaring met frontend is hij gestart met
        het ontwikkelen van veel voorkomende elementen in een CRM systeem (o.a.
        datatable, datepicker, calendar, input elements en forms). Om deze
        vervolgens te implementeren in zijn toekomstige projecten.
      </Experience>
      <Experience company="Swydo" startDate="Mei 2018" endDate="December 2019">
        Swydo is een reporting en monitoring tool voor online marketeers met de
        behoefte om alle visualisaties in de interactieve rapportages in-house
        te ontwikkelen omdat hun huidige library niet voldeed aan hun visie. Het
        Scrum team bestond uit 4 Front-end developers, 5 Back-end developers, 1
        UX designer, 1 tester en een product owner. Als Front-end developer was
        Randy verantwoordelijk voor een aantal visualisaties. De visualisaties
        moesten worden gemaakt met Typescript, React, D3 en styledcomponents
        volgens het design van de UX designer. Hij heeft veel samengewerkt met
        de back-end developers om helderheid te krijgen in de data structureren
        die de visualisaties van de back-end kreeg.
      </Experience>
      <Experience
        company="Fletch Hotels"
        startDate="Mei 2017"
        endDate="Dec 2018"
      >
        Fletcher Hotels had een nieuwe webshop nodig voor hun fanshop /
        cadeauwinkel en had de behoefte aan een Woocommerce webshop, omdat hun
        interne ontwikkelaars ervaring hadden met Wordpress.
      </Experience>
      <Experience
        company="SalesFeed"
        startDate="Juni 2013"
        endDate="September 2016"
      >
        Een uitgebreide Google Analytics die organisaties herkend op een
        website. Daarom is SalesFeed Nederland ontstaan en heeft Randy de switch
        gemaakt om fulltime te ontwikkelen voor SalesFeed. De organisatie had
        een behoefte aan een uitgebreid CRM voor het tonen van de gegevens (o.a.
        bedrijfsgegevens en bezoekgeschiedenis) van de organisaties die een
        website heeft bezocht.
      </Experience>
      <Experience
        company="Eden Online"
        startDate="Januari 2011"
        endDate="Augustus 2014"
      >
        Eden Online is een B2B online marketingbureau. Als webdeveloper was
        Randy verantwoordelijk voor de ontwikkeling en onderhoud van meer dan 40
        websites en webshops. User experience en meetbaarheid is hierbij de
        centrale gedachten waardoor het belangrijk is dat de website snel en
        goed moet werken.
      </Experience>
      <Experience
        company="TheMarketingShop"
        startDate="Juni 2010"
        endDate="November 2011"
      >
        TheMarketingShop is een online marketingbureau. Als webdeveloper was
        Randy verantwoordelijk voor de ontwikkeling en onderhoud van een aantal
        websites. Hij ontwikkelde maatwerk ModX plugins en templates. De
        templates moesten worden voorzien van alle SEO technieken om pagina’s
        bovenaan de zoekresultaten te krijgen.
      </Experience>

*/
