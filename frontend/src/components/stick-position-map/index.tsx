import { useState } from "react";
import Modal from "../modal";
import StickPositionMapProps from "./props";

function StickPositionMap(props: StickPositionMapProps) {
    const { canPress = true, xPosition = 0, onClose, yPosition = 0, onPress, onSubmit } = props;
    const [liveXPosition, setLiveXPosition] = useState(xPosition);
    const [liveYPosition, setLiveYPosition] = useState(yPosition);
    const [angle, setAngle] = useState(0);
    const [intensity, setIntensity] = useState(0);
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Modal onClose={onClose}>
            {canPress && (
                <div>
                    <input style={{ width: '100%' }} type='checkbox' checked={isPressed} onChange={(e) => {
                        setIsPressed(e.target.checked);
                    }} />
                    Press Button
                </div>
            )}

            <div>
                Joystick Angle <input type='number' max={360} min={-359} step={1} value={angle} onChange={(e) => {
                    setAngle(+e.target.value);
                }} /> Movement Intensity <input type='number' style={{ width: '100%' }} max={100} min={0} step={1} value={intensity} onChange={(e) => {
                    setIntensity(+e.target.value);
                }} />
            </div>

            <div>
                <div style={{ border: '1px solid black', width: 500, height: 500, position: 'relative' }}>
                    <div draggable onDrag={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setAngle(rect.top + e.clientY);
                    }} style={{ padding: 10, cursor: 'pointer', borderRadius: '50%', top: 50, left: 50, border: '2px solid black', position: 'absolute' }} />
                </div>
            </div>
        </Modal>
    );
};

export default StickPositionMap;
