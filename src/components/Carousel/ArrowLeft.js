import PropTypes from "prop-types";
const ArrowLeft = ({ onLeft }) => {
  return (
    <button onClick={onLeft} className="carousel__arrow carousel__arrow--left">
      {/*https://www.flaticon.com/free-icon/double-left-arrows-symbol_54227*/}
      <svg
        className="carousel__arrow-icon"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 612 612"
      >
        <g>
          <g id="_x34__11_">
            <g>
              <path d="M124.172,305.975L342.365,87.781c20.079-20.079,20.079-52.644,0-72.722c-20.079-20.079-52.644-20.079-72.723,0	L15.062,269.639c-20.079,20.079-20.079,52.644,0,72.723l254.58,254.58c20.079,20.078,52.644,20.078,72.723,0	c20.079-20.079,20.079-52.644,0-72.723L124.172,305.975z M431.395,305.694l165.371-165.982c20.308-20.359,20.308-53.408,0-73.768	c-20.309-20.359-53.204-20.359-73.513,0L321.139,268.823c-20.309,20.359-17.047,35.266,3.032,55.345L523.253,545.47	c20.309,20.359,53.204,20.359,73.513,0c20.308-20.359,20.308-53.408,0-73.768L431.395,305.694z" />
            </g>
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </button>
  );
};

export default ArrowLeft;

ArrowLeft.propTypes = {
  onLeft: PropTypes.func,
};
