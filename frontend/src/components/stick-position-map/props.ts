import StickCoordinates from '../../../../interfaces/stick-coordinates';

interface StickPositionMapProps {
    canPress?: boolean;
    xPosition: number;
    yPosition: number;
    onPress(state: boolean): void;
    onJoystickMove(coords: StickCoordinates): void;
    onSubmit(joystickState: StickCoordinates & { pressed: boolean }): void;
}

export default StickPositionMapProps;
