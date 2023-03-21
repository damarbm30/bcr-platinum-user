import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePayment = create(
  persist(
    (set, get) => ({
      startRent: null,
      lastRent: null,
      setCarRent: (params) => {
        set((state) => {
          return {
            startRent: params.start,
            lastRent: params.last,
          };
        });
      },
    }),
    { name: "payment" }
  )
);
export default usePayment;
