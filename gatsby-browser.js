import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import "./src/styles/global.css"

// Reset scroll position to top when navigating to a new page
export const shouldUpdateScroll = () => {
  return false; // This prevents Gatsby from restoring scroll position
}

// Alternative: Scroll to top on route change
export const onRouteUpdate = () => {
  window.scrollTo(0, 0);
}
