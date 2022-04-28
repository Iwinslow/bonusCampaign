function NoMatchRoute() {
  return (
    <div
      style={{
        fontSize: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ textAlign: "center" }}>Página no encontrada</p>
      <div>404</div>
    </div>
  );
}

export default NoMatchRoute;
