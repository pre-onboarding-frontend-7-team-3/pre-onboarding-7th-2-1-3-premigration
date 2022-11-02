const BackIcon = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default BackIcon;
