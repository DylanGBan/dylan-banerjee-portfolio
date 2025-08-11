import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect } from "react";

export const Modal = ({open, onClose, children}) => {

    useEffect(() => {
      if (open) {

        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [open]);

   return (
     <div
       onClick={onClose}
       className={cn(
         "fixed inset-0 flex justify-center items-center transition-colors",
         open ? "visible bg-background/95 backdrop-blur-xs" : "invisible"
       )}
     >

       {children}

     </div>
   );

}