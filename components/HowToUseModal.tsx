"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const HowToUseModal = () => {
  const router = useRouter();

  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title="Welcome Back"
      description="Log in to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <div>asd</div>
    </Modal>
  );
};

export default HowToUseModal;
