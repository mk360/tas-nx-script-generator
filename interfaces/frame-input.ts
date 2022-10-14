import ControllerButton from "../types/controller-button";
import StickPosition from "./stick-location";

interface FrameInput {
    [frameNumber: number]: {
        buttons: ControllerButton[];
        leftStick: StickPosition;
        rightStick: StickPosition;
    }
}

// format: frameNumber button1;button2 leftStickX;leftStickY rightStickX;rightStickY

export default FrameInput;
