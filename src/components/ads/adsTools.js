import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';


function AdsTool({ classNames, slot, timeout, googleAdId, format, style }) {
    const [adReady, setAdReady] = useState(false);
  
    useEffect(() => {
      let timeoutId;
      if (!adReady && typeof window !== 'undefined' && window.adsbygoogle) {
        timeoutId = setTimeout(() => {
          window.adsbygoogle.push({});
          setAdReady(true);
        }, timeout);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [adReady, timeout]);
  
    return (
      <div className={classNames}>
        <ins
          className="adsbygoogle"
          style={style || { display:"inline-block", width:"300px", height:"250px" }}
          data-ad-client={googleAdId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
  
  AdsTool.propTypes = {
    classNames: PropTypes.string,
    slot: PropTypes.string,
    timeout: PropTypes.number,
    googleAdId: PropTypes.string,
    format: PropTypes.string,
    style: PropTypes.object,
  };
  
  AdsTool.defaultProps = {
    classNames: '',
    timeout: 200,
  };
  
  export default AdsTool;
  