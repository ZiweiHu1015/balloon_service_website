// src/components/Analytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = ({ trackingId }) => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', trackingId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, trackingId]);

  return null; // This component doesn't render anything
};

export default Analytics;
