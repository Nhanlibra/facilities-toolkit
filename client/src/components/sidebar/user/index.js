import { H5 } from "../../../ui/typeography";

const User = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <img
        className="rounded-full"
        src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
      />
      <div>
        <H5>Nathan Opresnik</H5>
        <p className="text-gray-400">Head Mechanic</p>
      </div>
      <i className="bi-three-dots-vertical mr-4 text-blue-600"></i>
    </div>
  );
};

export default User;
