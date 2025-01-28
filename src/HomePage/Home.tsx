import Cards from "./Cards";
// import Logbutton from "./Logbutton";
import Navbar from "./Navbar";
import logo from "../assets/Sygnet.svg";
import nike from "../assets/Brands/Nike.svg";
import ritter from "../assets/Brands/Ritter Sport.svg";
import adidas from "../assets/Brands/Adidas.svg";
import holland from "../assets/Brands/New Holland.svg";

//NFT IMPORTS
import Nft1 from "../assets/Nft/Nft1.svg"
import Nft2 from "../assets/Nft/Nft2.svg";
import Nft3 from "../assets/Nft/Nft3.svg";
import Nft4 from "../assets/Nft/Nft4.svg";
import Nft5 from "../assets/Nft/Nft5.svg";


import { GiConfirmed } from "react-icons/gi";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { FaAnglesUp } from "react-icons/fa6";

const Times = [
  {
    id: 1,
    amount: 12,
    title: "Years of Experience",
  },
  {
    id: 2,
    amount: 88,
    title: "Success Projects",
  },
  {
    id: 3,
    amount: 14,
    title: "Active Projects",
  },
  {
    id: 4,
    amount: 93,
    title: "Happy Customers",
  },
];
const subValidationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email"),
});

export default function Home() {
  return (
    <main id="main" className="bg-rose-50">
      <div className="h-screen bg-[url('./assets/background.jpg')] bg-cover bg-no-repeat bg-center ">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col mt-56 items-center justify-center">
          <div className="py-4">
            <div className="flex items-center justify-center">
              <p className="text-slate-400">NON FUNGIBLE TOKENS</p>
            </div>
            <div>
              <h1 className="text-2xl text-white w-fit bg-clip-text font-bold font-serif md:text-3xl lg:text-7xl sm:text-[30px]">
                A new NFT <img src="" alt="" /> <br /> <img src="" alt="" />
                experience
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-lg mt-4 text-slate-400  font-serif md:text-sm lg:text-xl sm:text-[13px]">
                Discover, collect and sell
              </p>
            </div>
            {/* <div>
              <Formik initialValues={{}} onSubmit={() => {}}>
                <Form>
                  <Field className="bg-[#030353] mt-4 rounded-lg text-white p-1 w-[150px] flex justify-center items-center gap-2">
                    Get started
                    <FaLongArrowAltRight />
                  </Field>
                </Form>
              </Formik>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center gap-10 w-[50%] mx-auto mt-20">
          <div className="flex items-center justify-center">
            <img src={ritter} alt="ritter" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={nike} alt="nike" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={adidas} alt="adidas" className="h-8" />
          </div>
          <div className="flex items-center justify-center">
            <img src={holland} alt="new holland" className="h-8" />
          </div>
        </div>
        <img src={Nft1} alt="" className="relative top-10 right-11" />
        <img src={Nft2} alt="" className="relative bottom-32 left-16" />
        <img src={Nft3} alt="" className="relative top-10 right-24" />
        <img src={Nft4} alt="" className="relative bottom-14 left-40" />
        <img src={Nft5} alt="" className="relative bottom-60 right-11" />
      </div>

      <div id="media" className="p-4">
        <Cards />
      </div>

      <div
        id="about"
        className="mt-4 h-[800px] gap-4 grid grid-col-1 md:grid-cols-2 justify-center items-center w-full"
      >
        <div className="flex items-center justify-center w-full">
          <img src="" alt="An image" width={"400px"} />
        </div>
        <div className="sm:w-[100%]  md:w-[60%] leading-10 sm:mx-auto p-2">
          <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-black text-start font-bold font-serif">
            Welcome Speech
          </h1>
          <p className="lg:text-lg sm:text-sm mt-4 text-black font-serif">
            At Riser, our emphasis is not just education but formation.
            Education is but a part of our formation process. Our formation
            process has Christian values as its foundation. This, therefore,
            makes the destination of our mission different. Passing external
            examinations and qualifying for admission into tertiary institutions
            is not all we set out to achieve. Rather the destination of our
            formation process is the holistic development of the human person in
            the light of Christian value. Therefore, the popular saying “their
            destination our mission.” Please feel free to go through our website
            and leave a message for us on our contact page.
            <br />
            Thank you.
            <br />
            <span className="font-bold">Mr Olomu</span>
            <br />
            Proprietor
          </p>
        </div>
      </div>
      <div
        id="about"
        className="bg-slate-100 h-[600px] mt-4 gap-4 grid grid-cols-2 justify-center items-center w-full"
      >
        <div>
          <div className="mb-5 sm:w-[100%] md:w-[60%] leading-10 sm:mx-auto">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-black font-bold font-serif">
              Our Mission
            </h1>
            <p className="lg:text-lg sm:text-sm mt-4 text-black font-serif">
              To create a unique secondary school experience for the boy child
              premised on Catholic Holistic formation
            </p>
          </div>
          <div className="mt-5 sm:w-[100%] md:w-[60%] leading-10 sm:mx-auto">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-black font-bold font-serif">
              Our Vision
            </h1>
            <p className="lg:text-lg sm:text-sm mt-4 text-black font-serif">
              To raise young men of competence and integrity as inspired by
              gospel values.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <img src="" alt="An image" width={"400px"} />
        </div>
      </div>
      <div className="bg-white border-indigo-200 border-2 md:h-[300px] w-full mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center items-center sm:h-[700px] ">
        <div className="p-4">
          <h1 className="text-3xl font-serif">School Facilities</h1>
          <p>Riser is equipped with Ultra-modern facilities.</p>
        </div>
        <div>
          <ol className="text-start p-4 mx-auto">
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />
              Well equipped laboratories for computer, physics, chemistry and
              biology.
            </li>
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />
              Music and Arts Studio
            </li>
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />A Well equipped clinic with a residential
              doctor
            </li>
          </ol>
        </div>
        <div>
          <ol className="text-start p-4 mx-auto">
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />
              Various sporting facilities: volleyball, football, basketball &
              table tennis.
            </li>
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />
              Conducive environment for studies and audio-visual teaching aids.
            </li>
            <li className="flex items-center gap-3 text-start text-xl">
              <GiConfirmed size={50} />
              Home Economics / Food and Nutrition Lab
            </li>
          </ol>
        </div>
      </div>
      <div id="admission" className="bg-slate-50 h-screen">
        <div className="text-[#FFD700]">
          <h1 className="font-serif text-6xl font-bold md:text-4xl lg:text-7xl sm:text-[30px] text-center p-9">
            2025/2026 ADMISSION IS NOW OPEN
          </h1>
        </div>
        <div className="font-serif text-2xl font-bold md:text-sm lg:text-4xl sm:text-[10px] justify-center items-center flex flex-col md:flex-row md:mt-36">
          <img
            src=""
            alt=""
            className="relative sm:transform md:rotate-3 md:left-9 md:h-[500px]"
          />
          <img
            src=""
            alt=""
            className="relative sm:transform md:rotate-6 md:left-1 md:h-[500px]"
          />
          <img
            src=""
            alt=""
            className="relative sm:transform md:rotate-12 md:left- md:h-[500px]"
          />
        </div>
      </div>

      <div className=" mt-10">
        <div className="bg-slate-100 border-2 border-indigo-200 rounded-lg mx-auto text-center mt-4 h-[200px] p-4 w-1/2 ">
          <h1 className="md:text-xl lg:text-4xl font-medium mb-4 mt-3 sm:font-bold sm:text-xl">
            What the People Think About Us
          </h1>
          <p className="md:text-sm sm:text-[10px] mb-8">
            _"Inspiring minds, shaping futures, and creating lasting memories –
            our community speaks for itself."_
          </p>
        </div>
        <div className=" w-full flex justify-center items-center text-center bg-slate-100 h-[200px] mt-8 border-2 border-indigo-200">
          {Times.map((time) => (
            <div key={time.id} className="border-r-2 border-red-200 w-[100%]">
              <div className="text-4xl font-semibold font-serif">
                {time.amount}
              </div>
              <div className="text-sm">{time.title}</div>
            </div>
          ))}
        </div>
        <a
          href="#main"
          className="p-1 text-black rounded flex items-end justify-end"
        >
          <FaAnglesUp size={30} />
        </a>
      </div>
      <footer id="contacts" className="h-[200px]">
        <div className="flex mx-auto px-4 max-w-[1240px] justify-between items-center gap-10">
          <div>
            <img src={logo} className="h-[150px] w-[500px]" />
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 md:flex-row md:gap-7 text-[17px] font-semibold sm:text-[12px] md:text-[15px] lg:text-xm ">
            <div className="flex flex-col">
              <h1 className="font-bold">Links</h1>
              <a href="" className="text-xs">
                Admissions
              </a>
              <a href="" className="text-xs">
                Download Prospectus
              </a>
              <a href="" className="text-xs">
                Downloadable Files
              </a>
              <a href="" className="text-xs">
                FAQ's
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">Navigation</h1>
              <a href="" className="text-xs">
                Home
              </a>
              <a href="" className="text-xs">
                Admission
              </a>
              <a href="" className="text-xs">
                About Us
              </a>
              <a href="" className="text-xs">
                Gallery
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">Contacts</h1>
              <a href="" className="text-xs">
                riserschool@gmail.com
              </a>
              <a href="" className="text-xs">
                No. 10 Majokwe Olomu Street, Off Effurun Sapele Road, Effurun
                (between Ecobank and Zenith bank), Effurun, Nigeria, 330102
              </a>
              <a href="" className="text-xs">
                0802 300 4355
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg font-serif text-nowrap p-2">
              Subscribe to Our News Letter
            </h1>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={subValidationSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  if (values) {
                    toast.success("Successful!");
                  }
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              <Form>
                <div>
                  <label htmlFor="email" className="p-1">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="rounded p-1 border-2 border-indigo-100"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 text-xs text-slate-500">
          <p>© 2025 Riser School, Effurun.</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
}
