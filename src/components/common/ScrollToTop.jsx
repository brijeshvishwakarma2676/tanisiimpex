import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// The version of the currently loaded client bundles.
// When deploying a new build, update this constant and version.json to trigger
// a clean client-side reload and avoid chunk load errors during navigation.
const CURRENT_VERSION = '1.0.0';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route changes
    window.scrollTo(0, 0);

    // Version validation check to ensure client-side assets remain in sync with the server
    const verifyAppVersion = async () => {
      try {
        const response = await fetch(`/version.json?t=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.version && data.version !== CURRENT_VERSION) {
            console.info(`[Version System] Client version (${CURRENT_VERSION}) differs from server version (${data.version}). Reloading to fetch latest assets...`);
            window.location.reload();
          }
        }
      } catch (err) {
        // Suppress errors to ensure offline or temporary network drops don't interrupt navigation
        console.debug('[Version System] Could not reach version checkpoint:', err);
      }
    };

    verifyAppVersion();
  }, [pathname]);

  return null;
}

