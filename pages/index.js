import React from "react";
import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Sidebar from "@/components/sidebar/Sidebar";
import Feed from "@/components/Feed.jsx";
const index = () => {
  let { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-3 lg:px-0 flex ">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   let session = await getSession(context);
//   console.log(session);
//   return {
//     props: {
//       session,
//     },
//   };
// }
export default index;
