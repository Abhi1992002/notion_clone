"use client";
import { useEffect, useState } from "react";
import { SettingModals } from "../modals/settings-modal";
import { CoverImageModel } from "../modals/cover-image-modal";
// i am using this component to remove hydration error

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingModals />
      <CoverImageModel />
    </>
  );
};
