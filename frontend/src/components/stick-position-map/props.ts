import StickCoordinates from '../../../../interfaces/stick-coordinates';

interface StickPositionMapProps {
    canPress?: boolean;
    xPosition: number;
    yPosition: number;
    onClose(): void;
    onPress(state: boolean): void;
    onSubmit(joystickState: StickCoordinates & { pressed: boolean }): void;
}

export default StickPositionMapProps;
