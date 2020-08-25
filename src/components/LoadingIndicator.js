import React from "react";

function LoadingIndicator({ loading, children }) {
  return loading ? (
    <div display="flex" justifyContent="center" my={2} flexGrow={1}>
      {/* size={48} */}Loading ...
    </div>
  ) : (
    <>{children}</> || null
  );
}

export default LoadingIndicator;
