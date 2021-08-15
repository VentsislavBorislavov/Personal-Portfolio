const H2 = ({ children, className }) => {
  return (
    <h2 className={className}>
      <div className="before"></div>
      <div className="text-holder">
        <span>{children}</span>
      </div>
    </h2>
  );
};

export default H2;
