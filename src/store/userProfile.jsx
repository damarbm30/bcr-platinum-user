import create from "zustand";
import { persist } from "zustand/middleware";

const useProfile = create(
  persist(
    (set, get) => ({
      email: null,
      setProfile: (params) => {
        set((state) => {
          return {
            email: params.email,
          };
        });
      },
    }),
    { name: "profile" }
  )
);
export default useProfile;
