import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPassword } from "../features/AddDatas";
const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-8]).{6,}$");

const CreateServerPassword = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("");
  const [message, setmessage] = useState<boolean>(false);
  const [passwordFormat, setPasswordFormat] = useState<boolean>(false);
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [messageCheck, setmessageCheck] = useState<boolean>(false);
  const [passwordCheckFormat, setPasswordCheckFormat] = useState<boolean>(true);
  const validatePassword = () => {
    if (!validPassword.test(password)) {
      setPasswordFormat(true);
    } else {
      setPasswordFormat(false);
    }
  };
  const validatePasswordCheck = () => {
    if (!validPassword.test(passwordCheck)) {
      setPasswordCheckFormat(true);
    } else {
      setPasswordCheckFormat(false);
    }
  };
  return (
    <div className="flex flex-col h-full justify-between">
      <div className=" mt-[50px] flex items-center justify-center">
        <div className="flex flex-col  w-full max-w-[395px]">
          <h2 className=" font-bold mt-[15px] mb-[8px]">رمز عبور</h2>
          <div className="relative">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setmessage(true);
                validatePassword();
              }}
              value={password}
              className="w-full h-[43px] text-green-light px-[20px]  rounded-md bg-green-light bg-opacity-25"
            />
            {message && passwordFormat && (
              <img
                src="../../public/alarm.svg"
                className="absolute left-5 top-3"
              />
            )}
          </div>
          <h2 className=" font-bold mt-[15px] mb-[8px]">تکرار رمز</h2>
          <div className="relative ">
            <input
              onChange={(e) => {
                setPasswordCheck(e.target.value);
                setmessageCheck(true);
                validatePasswordCheck();
              }}
              value={passwordCheck}
              className="w-full h-[43px] text-green-light  px-[20px] rounded-md bg-green-light bg-opacity-25"
            />
            {messageCheck && passwordCheckFormat && (
              <img
                src="../../public/alarm.svg"
                className="absolute left-5 top-3"
              />
            )}
          </div>
          <h2 className="text-green-light font-bold mt-[15px] ">
            استفاده از SHH برای امنیت بیشتر
          </h2>
        </div>
        <div className="h-[90px] mt-[25px] mx-[30px] w-[1px] bg-gray" />
        <div className="flex flex-col ">
          {/* messages */}

          {message && passwordFormat && (
            <h3 className="font-bold text-green-dark">
              رمز میبایست شامل اعداد و حروف انگلیسی باشد و حداقل از 8 حرف تشکیل
              شده باشد
            </h3>
          )}

          {messageCheck && passwordCheckFormat && (
            <h3 className="font-bold text-green-dark">
              رمز میبایست شامل اعداد و حروف انگلیسی باشد و حداقل از 8 حرف تشکیل
              شده باشد
            </h3>
          )}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center gap-[10px] mt-[50px] ">
        <Link
          to={"/cloud/create-server/security"}
          className="rounded-md w-[184px] h-[54px] flex justify-center items-center  border-green-light border-[1px] text-green-light  text-[16px]"
        >
          مرحله قبل
        </Link>
        {message &&
          !passwordFormat &&
          messageCheck &&
          !passwordCheckFormat &&
          password == passwordCheck && (
            <div className="">
              <Link
                onClick={() => {
                  dispatch(addPassword(password));
                }}
                to={"/cloud/create-server/last-step"}
                className="rounded-md w-[184px] h-[54px] flex justify-center  items-center bg-green-dark text-white text-[16px]"
              >
                گام بعدی
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default CreateServerPassword;
