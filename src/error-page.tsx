import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  const errorMsg = isRouteErrorResponse(error) && error.statusText;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred, check if your url path is correct.</p>
      {errorMsg &&
        <p>
          <i>{errorMsg}</i>
        </p>
      }
      <Link to='/'>Go back to the home page</Link>
    </div>
  )
}
