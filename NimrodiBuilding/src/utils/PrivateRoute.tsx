import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  const { index } = useParams<{ index: string }>();
  const floorIndex = parseInt(index || "0");
  const floorAccess = useSelector((state: RootState) => state.floorAccess.floorAccess);
  const navigate = useNavigate();

  useEffect(()=> {
    if (!floorAccess[floorIndex]) {
      navigate("/forbidden");
    }
  })

  return <>{component}</>;
};

export default PrivateRoute;
