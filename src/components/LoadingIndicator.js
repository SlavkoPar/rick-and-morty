import React from "react";

function LoadingIndicator({ loading, children }) {
  return loading ? (
		<div style={{ display:"flex", justifyContent:"center", flexGrow:"1" }}>
			{/* size={48} */}Loading ...
		</div>
  ) : (
    <>{children}</> || null
  );
}

export default LoadingIndicator;
