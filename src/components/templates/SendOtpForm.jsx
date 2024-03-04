/* eslint-disable react/prop-types */

function SendOtpForm({ formik }) {
  return (
    <form
      className="flex flex-col items-start border-2 border-red-700 p-8 rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <p className="font-bold text-lg mb-4">ورود به حساب کاربری</p>
      <hr className="w-full" />
      <label className="my-4" htmlFor="input">
        شماره موبایل خود را وارد کنید.
      </label>
      <span className="text-gray-400 text-sm mb-4">
        برای استفاده ار امکانات دیوار لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره ارسال خواهد شد
      </span>
      <input
        value={formik.values.mobile}
        id="mobile"
        name="mobile"
        onChange={formik.handleChange}
        placeholder="شماره موبایل خود را وارد کنید"
        className={`border rounded-md p-2 text-sm w-full ${formik.errors.mobile && "border-red-700"} `}
      />
      <p className="text-red-700 mt-2 text-xs">{formik.errors.mobile}</p>
      <hr className="my-6 w-full" />
      <div className="flex items-center justify-end w-full">
        <button
          className="bg-red-700 text-white p-2 rounded-md flex items-end"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
}

export default SendOtpForm;
