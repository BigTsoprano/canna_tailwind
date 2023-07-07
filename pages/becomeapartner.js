import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import styles from "../styles/Join.module.css";
import { motion } from "framer-motion";
import MuxVideo from "@mux/mux-video-react";

const becomeapartner = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [howCanWeHelp, setHowCanWeHelp] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const { addDocument, response } = useFirestore("customerInfo");
  const servicesItems = ["Mobile development", "UI/UX Design", "web development", "SEO"]

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      companyName,
      websiteURL,
      firstName,
      lastName,
      businessEmail,
      phoneNumber,
      howCanWeHelp,
      hearAboutUs,
    });
  };

  useEffect(() => {
    if (response.success) {
      console.log("ok");
      setCompanyName("1");
      setWebsiteURL("");
      setFirstName("");
      setLastName("");
      setBusinessEmail("");
      setPhoneNumber("");
      setHowCanWeHelp("");
      setHearAboutUs("");
    }
  }, [response.success]);

  return (
    <main className="flex overflow-hidden">
    <div className="flex-1 hidden lg:block">
    <MuxVideo
   className="w-full h-screen object-cover"
   style={{
    backgroundColor:'#000',
    //  borderRadius: '0',
    //  height:'90vh',
    //  width:'100%',
    //   objectFit:'cover',
    //   zIndex: '0',
    //   position:'absolute'
    
   }}
   playbackId="bF3Euwt8pNq9tFRyDeBnKgbF5qDWBVOaemWMrQ99RVc"
   metadata={{
     video_id: "video-id-12345612",
     video_title: "hero video",
     viewer_user_id: "user-id-bc-789223",
   }}
   streamType="on-demand"
   playsInline
   autoPlay
   muted
   loop
 ></MuxVideo>
    </div>
    <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4  text-gray-600">
            <div style={{paddingTop:'60px'}}>
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get in touch
                </h3>
                <p className="mt-3">
                    We’d love to hear from you! Please fill out the form bellow.
                </p>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 mt-12 lg:pb-12"
            >
                <div>
                    <label className="font-medium">
                        Full name
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    />
                </div>
                <div>
                    <label className="font-medium">
                        Phone number
                    </label>
                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                            <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                <option>US</option>
                                <option>ES</option>
                                <option>MR</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            placeholder="+1 (555) 000-000"
                            required
                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                </div>
                <div>
                    <label className="font-medium">
                        Services
                    </label>
                    <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                        {
                            servicesItems.map((item, idx) => (
                                <li key={idx} className="flex gap-x-3 text-sm">
                                    <div>
                                        <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />
                                        <label
                                            htmlFor={`service-${idx}`}
                                            className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                        >
                                        </label>
                                    </div>
                                    <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <label className="font-medium">
                        Message
                    </label>
                    <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                </div>
                <button
                    className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</main>
  );
};

export default becomeapartner;
