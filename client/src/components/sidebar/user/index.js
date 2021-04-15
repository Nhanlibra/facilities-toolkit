import { H5 } from "../../../ui/typeography";

const User = () => {
  return (
    <div className="flex items-center w-full">
      <img
        className="rounded-full mr-2"
        src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
      />
      <div className="flex-grow">
        <H5>Nathan Opresnik</H5>
        <p className="text-gray-400">Head Mechanic</p>
      </div>
      <i className="bi-three-dots-vertical text-gray-400"></i>
    </div>
  );
};

export default User;
