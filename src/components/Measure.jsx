import useMeasure from "../hooks/useMeasure";

export default function Measure({ type = "horizontal" }) {
  const [ref, { width, height }] = useMeasure();

  return (
    <figure style={{ margin: "20px", textAlign: "center" }}>
      <figcaption
        style={{
          fontWeight: "bold",
          marginBottom: "8px",
          fontSize: "1.1rem",
          color: "#333",
        }}
      >
        {type.toUpperCase()}
      </figcaption>

      <article
        ref={ref}
        className={type}
        style={{
          resize: type === "horizontal" ? "horizontal" : "vertical",
          overflow: "auto",
          background: "#e0f7fa",
          border: "2px solid #00796b",
          borderRadius: "8px",
          padding: "10px",
          minWidth: "80px",
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          color: "#004d40",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {type === "horizontal" ? (
          <label>Width: {Math.floor(width)} px</label>
        ) : (
          <label>Height: {Math.floor(height)} px</label>
        )}
      </article>
    </figure>
  );
}
