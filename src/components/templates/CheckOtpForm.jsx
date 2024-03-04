import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { sendOtp } from "services/auth";

function CheckOtpForm({ formik, setStep }) {
  const [remainTime, setRemainTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);

  const resendOtp = async () => {
    setIsLoading(true);
    const { response } = await sendOtp(formik.values.mobile);
    if (response) {
      setRemainTime(Date.now());
      setIsLoading(false);
    }
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <button className="border-2 p-2 text-sm border-red-700 rounded-lg text-gray-400" onClick={() => resendOtp()}>درخواست مجدد کد</button>;
    }
    return (
      <div className=" flex gap-1 justify-center items-center">
        <p className="text-gray-500 text-sm"> درخواست کد</p>
        <p className="text-gray-500 text-sm">
          {minutes}:{seconds}
        </p>
      </div>
    );
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-start border-2 border-red-700 p-8 rounded-lg"
    >
      <p className="font-bold text-lg mb-4">ورود به حساب کاربری</p>
      <hr className="w-full" />
      <span className="text-sm text-gray-500 my-4">
        کد پیامک شده به شماره {formik.values.mobile} را وارد کنید{" "}
      </span>

      <input
        type="text"
        id="code"
        placeholder="کد تایید را وارد کنید"
        name="code"
        onChange={formik.handleChange}
        className={`border rounded-md p-2 text-sm w-full ${
          formik.errors.code && "border-red-700"
        } `}
      />
      <p className="text-xs text-red-700 mt-2">{formik.errors.code}</p>
      <div className=" flex w-full items-center justify-end mt-2">
        <button
          className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full"
          onClick={() => setStep(1)}
        >
          تغییر شماره موبایل
        </button>
      </div>
      <hr className="w-full my-4" />
      <div className="w-full flex justify-end items-cente gap-2">
        
        {isLoading ? (
          <p>?</p>
        ) : (
          <Countdown date={remainTime + 1000 * 120} renderer={renderer} />
        )}
        <button
          className="bg-red-700 text-white px-8 py-2 rounded-md "
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
