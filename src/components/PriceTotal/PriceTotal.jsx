import { useContext, useState } from "react";
import style from "./priceTotal.module.scss";
import * as Dialog from "@radix-ui/react-dialog";

const PriceTotal = () => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <div className={style.container}>
          <div className={style.price}>$267,249</div>
          <div className={style.text}> as low as $1,200 / mo</div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={style.dialogOverlay} />
        <Dialog.Content className={style.dialogContent}>
          <Dialog.Title className={style.dialogTitle}>
            Order Summary
          </Dialog.Title>
          <Dialog.Description className={style.dialogDescription}>
            Estimated Delivery: October 2024
          </Dialog.Description>
          <div className={style.lineItem}>
            <div>Base Unit</div>
            <div>$267,249</div>
          </div>
          <div className={style.lineItem}>
            <div>Upgrades</div>
            <div>$0</div>
          </div>
          <div className={style.total}>
            <div>Total</div>
            <div>$267,249</div>
          </div>
          <div className={style.ctaContainer}>
            <div className={style.saveText}>Save Your Design</div>
            <div className={style.sendText}>
              Send this design configuration to your email
            </div>
          </div>
          <fieldset className={style.fieldset}>
            <input
              className={style.input}
              id="name"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          {validationMessage && <div className={style.validationMessage}>{validationMessage}</div>}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className={style.button} onClick={() => console.log("Send email")}>Send to Email</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PriceTotal;
