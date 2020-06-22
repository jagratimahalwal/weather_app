/* export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
} */

import { useEffect } from 'react';

const importScript = (resourceUrl:any) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};

export default importScript;