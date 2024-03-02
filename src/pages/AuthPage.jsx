import React, { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import { useFormik } from "formik";

function AuthPage() {
  const [step, setStep] = useState(1);
  // const [mobile, setMobile] = useState("");
  // const [code, setCode] = useState("");

  const formik = useFormik({
    initialValues: {
      mobile: "",
      code: "",
    },
    onSubmit: () => {
      setStep(2);
    },
  });

  console.log(step);

  return (
    <>
      {step === 1 && <SendOtpForm setStep={setStep} formik={formik} />}
      {step === 2 && <CheckOtpForm />}
    </>
  );
}

export default AuthPage;
