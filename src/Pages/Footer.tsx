import { Formik, Field, ErrorMessage } from "formik";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { Form } from "react-router-dom";
import { toast } from "sonner";
import logo from "../assets/Sygnet.svg";
import * as Yup from "yup";



const Footer = () => {
    const subValidationSchema = Yup.object().shape({
      email: Yup.string().email("invalid email"),
    });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[80%] mx-auto px-4 justify-center items-center">
        <div className="border-border border-2 rounded-l-md h-60 flex flex-col justify-between p-4">
          <div className="flex p-4 gap-2">
            <p className="h-fit">
              <img src={logo} className="h-[50px] w-[50px]" />
            </p>
            <h1 className="text-2xl text-white font-bold">NFT Market</h1>
          </div>
          <div className="flex items-center justify-center gap-5 text-xs text-ashTextColor">
            <p>Support</p>
            <p>Terms of service</p>
            <p>License</p>
          </div>
        </div>
        <div className="text-white border-border border-2 h-60 flex flex-col justify-between p-4">
          <div className="flex flex-col py-4 leading-10 p-4 font-sora font-semibold">
            <a href="/view-more" className="text-xs">
              Auctions
            </a>
            <a href="/view-more" className="text-xs">
              Roadmap
            </a>
            <a href="/view-more" className="text-xs">
              Discover
            </a>
            <a href="/view-more" className="text-xs">
              Community
            </a>
          </div>
          <div className="p-2">
            <button className="flex items-center justify-center bg-customGradient text-white rounded-lg p-2 text-sm w-32">
              My account
            </button>
          </div>
          <div className="flex gap-4 items-center p-2">
            <p>
              <ImFacebook2 />
            </p>
            <p>
              <ImLinkedin />
            </p>
            <p>
              <FaSquareGithub />
            </p>
            <p>
              <FaTwitterSquare />
            </p>
            <p>
              <FaSquareInstagram />
            </p>
          </div>
        </div>
        <div className="border-border border-2 rounded-r-md h-60 flex flex-col justify-between p-4">
          <div className="flex items-center justify-center">
            <h1 className="text-xs font-semibold text-ashTextColor p-2 w-96 ">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </h1>
          </div>
          <div className="p-4 flex items-center justify-center">
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
              <Form className="rounded-lg w-54">
                <div className="bg-white w-full flex items-center justify-center rounded-lg p-1">
                  <Field
                    type="email"
                    name="email"
                    className="rounded p-2 bg-white text-xs w-60 "
                    placeholder="Newsletter"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  <button type="submit" className="text-blue-500 text-xs">
                    Sign in
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
