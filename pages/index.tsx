import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";
import { IServiceTypes } from "@/types";
import axios from "axios";
import { GetServerSideProps } from "next";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        아아아아아아아채어ㅏㅁㅇ러ㅣ라ㅣㅁㄴ어ㅏㅣㅁㅇㄴ럼ㅇㄹ나ㅣㅁㅇ러나ㅣㅁㄴㅇ럴아ㅣㅁ넘ㅇㄹ나ㅣㅁㅇㄴ렁라ㅣㅁ넘ㅇㄹ나ㅣㅁㅇ러남ㅇ리널아ㅣㅁㅇㄹ너ㅏㅣ;
        아아아아아아아채어ㅏㅁㅇ러ㅣ라ㅣㅁㄴ어ㅏㅣㅁㅇㄴ럼ㅇㄹ나ㅣㅁㅇ러나ㅣㅁㄴㅇ럴아ㅣㅁ넘ㅇㄹ나ㅣㅁㅇㄴ렁라ㅣㅁ넘ㅇㄹ나ㅣㅁㅇ러남ㅇ리널아ㅣㅁㅇㄹ너ㅏㅣ;
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">dkdkdkdkdkd</h6>
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service: IServiceTypes) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
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
