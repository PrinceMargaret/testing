import { ErrorBoundary } from "react-error-boundary";
import Checkout from "./Checkout/Checkout";
import ErrorFallback from "./ErrorFallback/Errorfallback";

function App() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mx-auto mt-5">
         <ErrorBoundary FallbackComponent={ErrorFallback} >
        <Checkout/>
        </ErrorBoundary> 
      
        </div>
      </div>
    </div>
 

   
  );
}

export default App;
