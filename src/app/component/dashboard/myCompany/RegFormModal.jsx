"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import CompanyForm from "./CompanyForm";

export function RegFormModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <Button
        color="primary"
        size="lg"
        className="mt-6"
        onPress={() => setOpen(true)}
      >
        <FiPlus />
        Register Company
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog
            className="
              w-full
              max-w-2xl
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-[#0f0f10]
              text-white
            "
          >
            <Modal.CloseTrigger />

            <Modal.Header>
              <div className="border-b border-white/10 px-6 py-6">
                <h2 className="text-3xl font-semibold text-white">
                  Register New Company
                </h2>

                <p className="mt-2 text-lg text-zinc-400">
                  Enter your business details to start hiring on HireLoop.
                </p>
              </div>
            </Modal.Header>

            <CompanyForm onClose={() => setOpen(false)} />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}