import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../styles/Home.module.css";

import { HeroTitle } from "@ui-molecules/HeroTitle/HeroTitle";
import { Skills } from "@ui-organism/Skills/Skills";
import { ProjectCards } from "@ui-organism/ProjectCards/ProjectCards";
import { ExperienceOverview } from "@ui-organism/ExperienceOverview/ExperienceOverview";
import { getExperiences } from "features/Experience/core/use-cases/getExperiences";
import { Experience } from "features/Experience/core/models";

interface HomeProps {
  experiences: Experience[];
}

const Home: NextPage<HomeProps> = ({
  experiences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <section className="flex items-center w-screen p-20">
        <ExperienceOverview experiences={experiences} />
      </section>
      <section className="h-screen flex items-center justify-center w-screen">
        <Skills />
      </section>

      <section className="flex items-center justify-center w-screen">
        <ProjectCards />
      </section>
      <section className="h-[calc(100vh-50px)] flex items-center justify-center w-screen">
        <HeroTitle />
      </section>
      <section className="bg-teal-800 h-screen flex items-center justify-center w-screen">
        <div className="text-white  text-2xl font-bold max-w-3xl leading-10">
          Een energieke en ondernemende developer met meer dan 6 jaar ervaring
          in het ontwikkelen van uitdagende webapplicaties. Hij heeft gevoel
          voor UX design en denkt graag mee vanuit de eindgebruiker. Hij is
          leergierig en zal zich altijd willen verbeteren. Hij is analytisch en
          een strategische denker en heeft een proactieve houding. Randy is een
          voorstander van Test-Driven Development, User-centered design en
          experimenteert graag met nieuwe technieken.
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  params,
}) => {
  return {
    props: {
      experiences: getExperiences(),
    },
  };
};

export default Home;
