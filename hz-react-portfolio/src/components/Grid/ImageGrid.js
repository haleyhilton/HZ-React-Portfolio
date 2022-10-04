import { FullWidthBgImage } from "./FullWidthBgImage";

export const ImageGrid = ({ data, gridArea, heading }) => {
  return (
    <>
      <h2 style={{ marginTop: 80, marginBottom: 10 }}>{heading}</h2>
      <div className="image-grid" style={{ gridTemplateAreas: gridArea }}>
        {data.map((item, index) => (
          <div className={`box${index + 1}`} key={index}>
            <FullWidthBgImage
              text={item.title}
              label={item.label}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};