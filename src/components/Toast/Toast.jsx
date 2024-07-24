import * as RadixToast from '@radix-ui/react-toast';
import style from "./toast.module.scss";
import CheckCircled from '../svgs/CheckCircled';

const Toast = ({ isOpen, setIsOpen, text }) => {
  return (
    <RadixToast.Provider>
      <RadixToast.Root className={style.root} open={isOpen} onOpenChange={setIsOpen}>
        <RadixToast.Title className={style.title}>{text}</RadixToast.Title>
        <RadixToast.Description className={style.description} asChild>
          {text}
        </RadixToast.Description>
        <CheckCircled />
      </RadixToast.Root>
      <RadixToast.Viewport className={style.viewport} />
    </RadixToast.Provider>
  )
}

export default Toast;