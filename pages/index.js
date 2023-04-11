import React from "react";
import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
const index = () => {
  let { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Header />
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
