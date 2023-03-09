import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set, get) => ({
      currentCar: null,
      setCurrentCar: (params) => {
        set(() => ({
          currentCar: params.car,
        }));
      },
    }),
    { name: "car" }
  )
);

export default useCar;