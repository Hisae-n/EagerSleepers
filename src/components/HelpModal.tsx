import { useEffect, useRef } from "react";
import HelpContent from "./HelpContent";

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function HelpModal({
  open,
  onClose,
}: HelpModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClose={onClose}
    >
      <div className="modal-box w-11/12 max-w-6xl h-[90vh] flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <HelpContent />
        </div>

        <div className="modal-action justify-center">
          <form method="dialog">
            <button
              className="btn btn-lg btn-warning btn-soft rounded-lg"
              // className="btn btn-warning btn-soft text-lg"
              onClick={onClose}
            >
              Close
            </button>
          </form>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}