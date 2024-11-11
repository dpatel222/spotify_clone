"use client";

import Modal from "./Modal";
import useHowToUseModal from "@/hooks/useHowToUseModal";

const HowToUseModal = () => {
  const HowToUseModal = useHowToUseModal();

  const onChange = (open: boolean) => {
    if (!open) {
      HowToUseModal.onClose();
    }
  };

  return (
    <Modal
      title="Welcome to Our Website"
      description="Log in to your account to get started"
      isOpen={HowToUseModal.isOpen}
      onChange={onChange}
    >
      <div className="space-y-4 text-white-800">
        <p>
          This website, built using Next.js, Supabase for authentication, and
          Stripe for payment processing, offers the following features:
        </p>
        <ul className="list-disc pl-5">
          <li>Register or log in to create your personal account.</li>
          <li>Upload your own songs and share them with others.</li>
          <li>
            Subscribe to access premium features through Stripe. For testing
            purposes, use the card number <strong>4242 4242 4242 4242</strong>{" "}
            with any future expiration date and CVC.
          </li>
        </ul>
        <p>
          We hope you enjoy exploring and sharing music on our platform. If you
          have any questions, please reach out to our support team.
        </p>
      </div>
    </Modal>
  );
};

export default HowToUseModal;
