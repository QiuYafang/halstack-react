import { DxcSpinner } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return <DxcSpinner margin="medium" showValue value={50} label="Loading..." />;
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };