import LoadingButton from "@mui/lab/LoadingButton";

const CustomLoader = () => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};

const MuiButton = (props) => {
  const { variant, loading, disabled, ...restProps } = props;
  return (
    <LoadingButton
      {...restProps}
      loading={loading}
      disabled={disabled || loading}
      variant={variant}
      loadingIndicator={<CustomLoader />}
      loadingPosition="center"
    />
  );
};

MuiButton.defaultProps = {
  variant: "contained",
  loading: false,
  disabled: false,
};

export default MuiButton;
