import Logo from "./logo";

interface OpenGraphTemplateProps {
  title: string;
  description: string;
  cta: string;
}

function OpenGraphTemplate({
  title,
  description,
  cta,
}: OpenGraphTemplateProps) {
  return (
    <div
      style={{
        fontSize: 128,

        backgroundColor: "#0a0a0a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "60px 60px",
        position: "relative",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Logo width={300} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "80%",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "60px",
            textAlign: "left",
            marginBottom: "0",
            marginTop: "40px",
            fontFamily: "SpaceGrotesk",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#ffffff",
            fontSize: "24px",
            textAlign: "left",
            fontFamily: "Inter",
            marginTop: "20px",
          }}
        >
          {description}
        </p>
      </div>
      <button
        style={{
          fontSize: "35px",
          padding: "30px 40px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          borderRadius: "200px",
          fontFamily: "Inter",
        }}
      >
        {cta}
      </button>
    </div>
  );
}

export default OpenGraphTemplate;
