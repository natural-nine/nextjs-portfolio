import ServiceCard from "@/components/ServiceCard";
import { IServiceTypes } from "@/types";
// import { GetServerSideProps, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { routeAni, stagger, variants } from "@/animation";
// import axios from "axios";
import { services } from "@/data";
import Head from "next/head";

// interface ISer {
//   services: IServiceTypes[];
// }

const Home = () => {
  return (
    <>
      <Head>
        <title>My-portfolio</title>
        <meta
          name="description"
          content="song's portfolio"
        />
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routeAni}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h5 className="my-3 font-medium">
          항상 새로운 것에 빠지는 걸 좋아하고 쾌활한 성격으로 주변으로부터 모든
          지식을 배우고 싶어하며 유연한 커뮤니케이션 능력을 가지고 있기에 모든
          팀 협업에서도 매번 좋은 분위기를 만들어 냅니다. 또한 영어 원문 기술
          문서도 어려움 없이 이해할 수 있습니다.
        </h5>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h6 className="my-3 text-xl font-bold tracking-wide">
            What I am doing
          </h6>
          <motion.div
            className="grid gap-4 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service: IServiceTypes) => (
              <motion.div
                variants={variants}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                key={service.id}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const { data } = await axios.get("http://localhost:3000/api/services");
//   return {
//     props: {
//       services: data,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticProps) => {
//   const { data } = await axios.get("http://localhost:3000/api/services");
//   // console.log(data);
//   return {
//     props: {
//       services: data,
//     },
//   };
// };
export default Home;
