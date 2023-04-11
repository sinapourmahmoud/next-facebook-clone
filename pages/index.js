import React from "react";
import Header from "@/components/Header";
import { getSession } from "next-auth/react";
const index = ({ session }) => {
  return (
    <div>
      <Header />
    </div>
  );
};
export async function getServerSideProps(context) {
  let session = await getSession(context);
  console.log(session);
  return {
    props: {
      session,
    },
  };
}
export default index;
