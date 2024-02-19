"use client";

type ErrorProps = {
  error: Error;
};
function Error({ error }: ErrorProps) {
  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-white z-50">
      <h1>{error?.message ? error.message : "Something went wrong"}</h1>
    </div>
  );
}

export default Error;
