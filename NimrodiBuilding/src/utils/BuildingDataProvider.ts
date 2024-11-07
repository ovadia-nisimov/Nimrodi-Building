import { useState, useEffect } from "react";
import buildingDataFile from "../data/building.json";

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setbuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setbuildingData(buildingDataFile);
  }, []);

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    return buildingData[floorIndex];
  };

  const getListOfActivities = (): string[] => {
    return buildingData.map((floor) => floor.activity);
  };

  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;
