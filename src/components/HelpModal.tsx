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
      <div className="modal-box w-11/12 max-w-6xl h-[90vh]">
        <HelpContent />

        <div className="modal-action" className="badge badge-outline badge-info">
          <form method="dialog">
            <button
              className="btn"
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