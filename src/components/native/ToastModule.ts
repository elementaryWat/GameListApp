import { NativeModules } from "react-native";

interface ToastModuleInterface {
  showToast(message: string): void;
}

const ToastModule = NativeModules.ToastModule as ToastModuleInterface;

export default ToastModule;
