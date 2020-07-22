import { DxcTag } from "@diaas/dxc-react-cdk";
import dxcLogoPath from "./images/dxclogo.png";

const code = `() => {
  return (
    <DxcTag
      margin="medium"
      iconSrc={dxcLogoPath}
      label="DXC Technology"
      size="large"
      onClick={() => {
        console.log("click");
      }}
    ></DxcTag>
  );
}`;

const scope = {
  DxcTag,
  dxcLogoPath
};

export default { code, scope };