

function copyScene(scene) {
    return scene.map(row => row.slice());
}

function createEmptyState() {

}

function mergeIntoStage(scene, shape, position) {

}

export default function useBoard() {
    const [scene, setScene] = useState(() => createEmptyState());
    const [shape, setShape] = useState(() => createRandomShape());
    const [position, setPosition] = useState({x:0, y:0});
    const [display, setDisplay] = useState(() => mergeIntoStage(scene, shape, position));
    const [score, setScore] = useState(0);

    useEffect(updateDisplay, [scene, shape, position]);
    useEffect(removeFullLines, [scene]);

    function updateDisplay() {
        const newDisplay = mergeIntoStage(scene, shape, position);
        setDisplay(newDisplay);
    }

    function removeFullLines() {
        const newScene = copyScene(scene);
        let touched = false;

        const removeRow =
    }

    function onKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                movePosition(1, 0);
                event.preventDefault();
                break;
            case 'ArrowRight':
                movePosition(-1, 0);
                event.preventDefault();
                break;
            case 'ArrowDown':
                movePosition(0, 1);
                event.preventDefault();
                break;
            case 'ArrowUp':
                rotateShape();
                event.preventDefault();
                break;
            default:
                break;
        }
    }

    function movePosition(x, y) {
        const res = {x: x + position.x, y: y + position.y};

        if(!validPosition(res, shape)) {return false};

        setPosition(res);

        return true;
    }

    function validPosition() {
        return shape.shape.every(point => {
            elementX = point.x + position.x;
            elementY = point.y + position.y;

            if (elementX < 0 | elementX >= COLUMN_COUNT 
                || elementY < 0 | elementY >= ROW_COUNT
                || scene[x][y] != 0) {
                    return false;
                }
            
                return true;
        })
    }
}