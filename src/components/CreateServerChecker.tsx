import DefenceIcon from "../Icons/DefenceIcon";
import FormIcon from "../Icons/FormIcon";
import LastForm from "../Icons/LastForm";
import LockIcon from "../Icons/LockIcon";
import PlanIcon from "../Icons/PlanIcon";
import SettingIcon from "../Icons/SettingIcon";

interface Iprops {
  active?: string;
}
const CreateServerChecker = ({ active }: Iprops) => {
  console.log(active);
  return (
    <div className="flex mt-[20px] items-center">
      {/* details */}
      <div className="w-[50px] h-[50px] rounded-full bg-green-dark flex justify-center items-center ">
        <FormIcon color={"#fff"} />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* system */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ">
        <SettingIcon />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* plan */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ">
        <PlanIcon />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* network */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ">
        <DefenceIcon />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* password */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ">
        <LockIcon />
      </div>
      <div className="w-[82px] h-[2px] mx-[17.5px] bg-green-dark" />
      {/* last step */}
      <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex justify-center items-center ">
        <LastForm />
      </div>
    </div>
  );
};

export default CreateServerChecker;
