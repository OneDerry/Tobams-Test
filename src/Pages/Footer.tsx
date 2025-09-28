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
    <div className="mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl mx-auto px-4 justify-center items-center gap-0">
        <div className="border-border border-2 lg:rounded-l-md h-auto lg:h-60 flex flex-col justify-between p-4">
          <div className="flex p-4 gap-2 items-center">
            <img src={logo} className="h-12 w-12" />
            <h1 className="text-xl sm:text-2xl text-white font-bold">
              NFT Market
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-5 text-xs text-ashTextColor flex-wrap">
            <p>Support</p>
            <p>Terms of service</p>
            <p>License</p>
          </div>
        </div>
        <div className="text-white border-border border-2 h-auto lg:h-60 flex flex-col justify-between p-4">
          <div className="flex flex-col py-4 leading-8 lg:leading-10 p-4 font-sora font-semibold">
            <a
              href="/view-more"
              className="text-xs hover:text-white transition-colors"
            >
              Auctions
            </a>
            <a
              href="/view-more"
              className="text-xs hover:text-white transition-colors"
            >
              Roadmap
            </a>
            <a
              href="/view-more"
              className="text-xs hover:text-white transition-colors"
            >
              Discover
            </a>
            <a
              href="/view-more"
              className="text-xs hover:text-white transition-colors"
            >
              Community
            </a>
          </div>
          <div className="p-2">
            <button className="flex items-center justify-center bg-customGradient text-white rounded-lg p-2 text-sm w-full sm:w-32 hover:opacity-90 transition-opacity">
              My account
            </button>
          </div>
          <div className="flex gap-3 sm:gap-4 items-center p-2 justify-center lg:justify-start">
            <p className="hover:text-blue-400 transition-colors cursor-pointer">
              <ImFacebook2 size={20} />
            </p>
            <p className="hover:text-blue-400 transition-colors cursor-pointer">
              <ImLinkedin size={20} />
            </p>
            <p className="hover:text-blue-400 transition-colors cursor-pointer">
              <FaSquareGithub size={20} />
            </p>
            <p className="hover:text-blue-400 transition-colors cursor-pointer">
              <FaTwitterSquare size={20} />
            </p>
            <p className="hover:text-blue-400 transition-colors cursor-pointer">
              <FaSquareInstagram size={20} />
            </p>
          </div>
        </div>
        <div className="border-border border-2 lg:rounded-r-md h-auto lg:h-60 flex flex-col justify-between p-4">
          <div className="flex items-center justify-center">
            <p className="text-xs font-semibold text-ashTextColor p-2 text-center">
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
              velit, sed egestas in. Id nam semper dolor tellus vulputate eget
              turpis.
            </p>
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
              <Form className="rounded-lg w-full max-w-sm">
                <div className="bg-white w-full flex items-center justify-center rounded-lg p-1">
                  <Field
                    type="email"
                    name="email"
                    className="rounded p-2 bg-white text-xs w-full"
                    placeholder="Newsletter"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  <button
                    type="submit"
                    className="text-blue-500 text-xs px-2 hover:text-blue-700 transition-colors"
                  >
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
