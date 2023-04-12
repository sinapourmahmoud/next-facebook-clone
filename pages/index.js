import React from "react";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Sidebar from "@/components/sidebar/Sidebar";
import Feed from "@/components/Feed.jsx";
import Widgets from "@/components/Widgets.jsx";
//firebase
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
const index = ({ posts }) => {
  let { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="bg-gray-100 h-screen overflow-y-hidden">
      <Header />
      <div className="max-w-7xl mx-auto px-3 lg:px-0 flex ">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  let posts = [];
  let collectionRef = collection(db, "posts");
  let data = await getDocs(collectionRef);
  posts = data.docs.map((res) => {
    return {
      ...res.data(),
      id: res.id,
    };
  });
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
export default index;
