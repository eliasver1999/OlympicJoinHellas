import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCookieConsent } from "../../hooks/useCookieConsent";
type Props = {};
interface IFormInput {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  email: string;
}
const CONTACT_EMAIL = "olympicjoin@gmail.com";
const Contact = (props: Props) => {
  const { t } = useTranslation();
  const { consent, accept } = useCookieConsent();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `From: ${data.firstName} ${data.lastName} <${data.email}>\n\n${data.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    reset();
  };
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center text-3xl text-slate-50 tracking-widest hover-underline-animation font-semibold cursor-pointer lg:px-96">
          {t("contact.title")}
        </h4>
      </div>
      <div className="flex w-screen lg:flex-row flex-col space-x-12 lg:justify-between 2xl:px-64 mt-8">
        <div className="lg:justify-center flex flex-col lg:items-center w-full text-center">
          <h4 className="text-slate-50 text-xl mb-8 tracking-widest">
            {t("contact.where")}
          </h4>
          <div className="mapouter">
            <div className="gmap_canvas">
              {consent === "accepted" ? (
                <iframe
                  title="Olympic Join Hellas location map"
                  height="500"
                  id="gmap_canvas"
                  loading="lazy"
                  className="rounded-xl lg:w-[600px] w-[350px] mx-auto"
                  src="https://maps.google.com/maps?q=54,%20Methonis%20Street%20Pireas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              ) : (
                <div className="rounded-xl lg:w-[600px] w-[350px] h-[500px] mx-auto bg-slate-200 flex flex-col justify-center items-center text-center px-6 gap-4">
                  <p className="text-slate-700">{t("map.consentRequired")}</p>
                  <button
                    onClick={accept}
                    className="px-4 py-2 rounded-md bg-[#326da8] text-slate-50 font-semibold hover:bg-[#274f7a] transition-colors duration-300"
                  >
                    {t("map.loadMap")}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-slate-50 text-xl tracking-widest">
              {t("contact.details")}
            </h4>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <BsFillTelephoneFill color="white" />
              <h4 className="text-slate-50">(+30) 210 4082170</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <BsFillTelephoneFill color="white" />
              <h4 className="text-slate-50">(+30) 210 4082167</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <FaFax color="white" />
              <h4 className="text-slate-50">(+30) 210 4082171</h4>
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <MdEmail color="white" />
              <h4 className="text-slate-50">olympicjoin@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8  lg:px-16 px-8 py-12 rounded-lg lg:bg-[#326da8]/80"
          >
            <div className="xl:flex 2xl:flex-row flex flex-col lg:space-y-4 2xl:space-y-0 space-y-4 lg:justify-center 2xl:space-x-2">
              <div className="flex flex-col w-full">
                {errors.firstName && (
                  <span role="alert" className=" text-red-600 text-center">
                    {errors.firstName.message}
                  </span>
                )}

                <input
                  placeholder={t("contact.form.firstName") as string}
                  {...register("firstName", {
                    required: t("contact.form.errors.firstNameRequired") as string,
                  })}
                  className={`p-2  outline-none rounded-md border-2 ${
                    errors.firstName ? "border-2 border-red-500" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col w-full">
                {errors.lastName && (
                  <span role="alert" className=" text-red-600 text-center">
                    {errors.lastName.message}
                  </span>
                )}
                <input
                  placeholder={t("contact.form.lastName") as string}
                  {...register("lastName", {
                    required: t("contact.form.errors.lastNameRequired") as string,
                  })}
                  className={`p-2  outline-none rounded-md border-2 ${
                    errors.lastName ? "border-2 border-red-500" : ""
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              {errors.email && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.email.message}
                </span>
              )}
              <input
                placeholder={t("contact.form.email") as string}
                {...register("email", {
                  required: t("contact.form.errors.emailRequired") as string,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t("contact.form.errors.emailInvalid") as string,
                  },
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
              />
            </div>
            <div className="flex flex-col">
              {errors.subject && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.subject.message}
                </span>
              )}
              <input
                placeholder={t("contact.form.subject") as string}
                {...register("subject", {
                  required: t("contact.form.errors.subjectRequired") as string,
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.subject ? "border-2 border-red-500" : ""
                }`}
              />
            </div>

            <div className="flex flex-col">
              {errors.message && (
                <span role="alert" className=" text-red-600 text-center">
                  {errors.message.message}
                </span>
              )}
              <textarea
                placeholder={t("contact.form.message") as string}
                {...register("message", {
                  required: t("contact.form.errors.messageRequired") as string,
                })}
                className={`p-2  outline-none rounded-md border-2 ${
                  errors.message ? "border-2 border-red-500" : ""
                }`}
              />
            </div>

            <button
              type="submit"
              className="bg-slate-50 py-4 mx-auto block rounded-md text-gray-900 px-12 mt-4 hover:bg-[#326da8] hover:text-slate-50 transition-all duration-500"
            >
              {t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
