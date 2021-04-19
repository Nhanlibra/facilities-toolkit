export default () => {
  return (
    <div className="d-flex w-100 p-3 border-top align-items-center">
      <img
        width="48px"
        height="48px"
        className="rounded-circle mr-2"
        src="https://randomuser.me/api/portraits/thumb/men/1.jpg"
      />
      <div className="flex-fill">
        <h6 className="m-0 p-0">Nathan Opresnik</h6>
        <small className="m-0 p-0">Head Mechanic</small>
      </div>
      <i className="bi-three-dots-vertical"></i>
    </div>
  );
};
