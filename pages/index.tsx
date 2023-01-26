import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";
import { IServiceTypes } from "@/types";
import axios from "axios";
import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import { routeAni, stagger, variants } from "@/animation";
const Home = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAni}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        아아아아아아아채어ㅏㅁㅇ러ㅣ라ㅣㅁㄴ어ㅏㅣㅁㅇㄴ럼ㅇㄹ나ㅣㅁㅇ러나ㅣㅁㄴㅇ럴아ㅣㅁ넘ㅇㄹ나ㅣㅁㅇㄴ렁라ㅣㅁ넘ㅇㄹ나ㅣㅁㅇ러남ㅇ리널아ㅣㅁㅇㄹ너ㅏㅣ;
        아아아아아아아채어ㅏㅁㅇ러ㅣ라ㅣㅁㄴ어ㅏㅣㅁㅇㄴ럼ㅇㄹ나ㅣㅁㅇ러나ㅣㅁㄴㅇ럴아ㅣㅁ넘ㅇㄹ나ㅣㅁㅇㄴ렁라ㅣㅁ넘ㅇㄹ나ㅣㅁㅇ러남ㅇ리널아ㅣㅁㅇㄹ너ㅏㅣ;
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">dkdkdkdkdkd</h6>
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
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
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
export default Home;
