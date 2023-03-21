import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUpload = create(
  persist(
    (set, get) => ({
      uploadPic: null,
      setUploadPic: (params) => {
        set((state) => ({
          uploadPic: params.upload,
        }));
      },
    }),
    { name: "upload" }
  )
);

export default useUpload;
