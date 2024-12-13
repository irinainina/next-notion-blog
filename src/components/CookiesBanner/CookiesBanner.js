"use client";

import { useState, useEffect } from "react";
import { setUserConsent } from "@/utils/setUserConsent";
import styles from "./CookiesBanner.module.css";

const CookiesBanner = ({ userConsent }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
  };

  useEffect(() => {    
    if (!userConsent) {
      setIsBannerVisible(true);
      deleteCookie("_ga");
      deleteCookie("_ga_EP25DX68WB");
    }
  }, []);

  const handleAcceptAll = () => {
    setUserConsent("analytics:true");
    setIsBannerVisible(false);
  };

  const handleRejectAll = () => {
    setUserConsent("analytics:false");
    setIsBannerVisible(false);
    deleteCookie("_ga");
    deleteCookie("_ga_EP25DX68WB");
  };

  if (!isBannerVisible) return null;

  return (
    <div className={styles.container}>
      <p>
        <strong>We use cookies!</strong> Hi, this web app uses essential cookies to ensure its proper operation and
        tracking cookies to understand how you interact with it. The latter will be set only after consent.
      </p>
      <div className={styles.btns}>
        <button
          className={styles.btn}
          onClick={handleAcceptAll}
        >
          Accept all
        </button>
        <button
          className={styles.btn}
          onClick={handleRejectAll}
        >
          Reject all
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;
