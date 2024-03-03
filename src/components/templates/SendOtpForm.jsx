/* eslint-disable react/prop-types */
import React from "react";

function SendOtpForm({ formik }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده ار امکانات دیوار لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره ارسال خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید.</label>
      <input
        value={formik.values.mobile}
        id="mobile"
        name="mobile"
        onChange={formik.handleChange}
      />
      <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.mobile}</p>
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
