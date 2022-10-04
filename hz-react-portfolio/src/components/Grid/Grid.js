import { imageData } from './GridData'
import { ImageGrid } from "./ImageGrid";
import "./styles.css";


export default function Grid() {
    return (
      <div className="main-container">
        <ImageGrid
          heading ={"Projects"}
          data={imageData}
          gridArea={'"box1 box1 box2 box2" "box1 box1 box3 box4"'}
        />
      </div>
    );
  }