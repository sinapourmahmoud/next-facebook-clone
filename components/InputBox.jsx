import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "@/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const inputIcon =
  "flex items-center gap-2 tranisation-all duration-200 hover:bg-gray-100 p-2 rounded-xl cursor-pointer";
const InputBox = () => {
  let [urlSrcImage, setUrlSrcImage] = useState(null);
  let [srcImage, setSrcImage] = useState(null);
  let fileLoader = useRef(null);
  let captionInput = useRef(null);
  let sessionData = useSession();
  const addPost = (e) => {
    e.preventDefault();
    let inputVal = captionInput.current.value;
    let collectionRef = collection(db, "posts");
    if (!inputVal) return;
    addDoc(collectionRef, {
      title: inputVal,
      postedBy: sessionData.data.user.name,
      email: sessionData.data.user.email,
      userImage: sessionData.data.user.image,
    })
      .then((res) => {
        let postId = res.id;
        if (srcImage) {
          const storage = getStorage();

          const storageRef = ref(storage, `posts/${postId}`);

          const uploadTask = uploadBytesResumable(storageRef, srcImage);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              switch (snapshot.state) {
                case "paused":
                  break;
                case "running":
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                const docRef = doc(db, "posts", postId);
                updateDoc(docRef, {
                  postImage: downloadURL,
                })
                  .then((res) => {
                    setSrcImage(null);
                    setUrlSrcImage(null);
                  })
                  .catch((err) => {
                    alert(err.message);
                  });
              });
            }
          );
        }
        captionInput.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addPhoto = (e) => {
    let render = new FileReader();
    setSrcImage(e.target.files[0]);
    if (e.target.files[0]) {
      render.readAsDataURL(e.target.files[0]);
    }
    render.onload = function (e) {
      console.log(e.target.result);
      setUrlSrcImage(e.target.result);
    };
  };
  return (
    <div className="bg-white shadow-lg py-3 px-2 flex flex-col gap-3 my-4 rounded-xl">
      <form onSubmit={addPost}>
        <div className="w-full flex items-center gap-5">
          <Image
            src={sessionData?.data?.user?.image}
            className="rounded-full "
            width={40}
            alt="user-profile"
            height={40}
            objectFit="contain"
          ></Image>
          <input
            type="text"
            ref={captionInput}
            className="bg-gray-200 w-full h-19 rounded-md p-2 outline-none border-0 font-normal text-base"
            placeholder="Add your post Caption"
          />
          {urlSrcImage && (
            <div
              className="flex flex-col cursor-pointer items-center"
              onClick={() => {
                setUrlSrcImage(null);
                setSrcImage(null);
              }}
            >
              <img
                src={urlSrcImage}
                className="rounded-full object-cover w-8 h-8"
              />
              <span className="text-red-500 font-light text-sm">Remove</span>
            </div>
          )}
        </div>
      </form>
      <div className="flex justify-between p-3 ">
        <div className={inputIcon}>
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Live Video
          </p>
        </div>
        <div className={inputIcon} onClick={() => fileLoader.current.click()}>
          <CameraIcon className="h-7 text-green-400"></CameraIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Photo/Video
          </p>
          <input type="file" hidden ref={fileLoader} onChange={addPhoto} />
        </div>
        <div className={inputIcon}>
          <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
