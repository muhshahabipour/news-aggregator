import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-xl font-bold">Oops!</h1>
        <p className="mt-2">Sorry, an unexpected error has occurred.</p>
        <p className="mt-4 italic font-mono text-neutral-400">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
