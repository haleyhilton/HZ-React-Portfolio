export const FullWidthBgImage = ({ image, label, text }) => {
    return (
      <div
        className="bg-image-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="gradient">
          <div className="text-container">
            <div className="label">{label}</div>
            <div className="body">{text}</div>
          </div>
        </div>
      </div>
    );
  };
  