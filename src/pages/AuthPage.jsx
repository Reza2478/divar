import React, { useState } from "react";
import SendOtpForm from "components/templates/SendOtpForm";
import CheckOtpForm from "components/templates/CheckOtpForm";
import { useFormik } from "formik";
import { checkOtp, sendOtp } from "services/auth";
import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProfile from "services/user";

function AuthPage() {
  const [step, setStep] = useState(1);

  const { refetch } = useQuery({
    queryKey: "profile",
    queryFn: getProfile,
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      mobile: "",
      code: "",
    },
    validate: (values) => {
      const errors = {};
      if (step === 1 && values.mobile === "") {
        errors.mobile = "شماره موبایل را وارد کنید";
      }
      else if (step === 1 && values.mobile.length !== 11) {
        errors.mobile = "شماره موبایل شما باید 11 کاراکتر باشد !";
      }
      if (step === 2 && values.code.length !== 5) {
        errors.code = "کد تایید وارد شده باید شامل 5 رقم رباشد !";
      }
      return errors;
    },

    onSubmit: async (values) => {
      // console.log("first");
      // setStep(2);
      if (step === 1) {
        const { response, error } = await sendOtp(values.mobile);
        if (response) {
          toast.success(response.data.message);
          setStep(2);
        }
        if (error) toast.error(error.response.data.message);
        console.log({ response, error });
      } else {
        const { response, error } = await checkOtp(values.mobile, values.code);
        if (response) {
          toast.success(response.data.message);
          setCookie(response.data);
          navigate("/");
          refetch();
        }
        if (error) toast.error(error.response.data.message);
        console.log({ response, error });
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-full">
      {step === 1 && <SendOtpForm formik={formik} />}
      {step === 2 && <CheckOtpForm setStep={setStep} formik={formik} />}
      <Toaster />
    </div>
  );
}

export default AuthPage;
