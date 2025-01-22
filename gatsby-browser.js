import littlefoot from 'littlefoot'

export function onRouteUpdate({ location, prevLocation }) {
  const isNotIe = window && window.document && !window.document.documentMode
  const isPathUpdated = !prevLocation || location.pathname !== prevLocation.pathname
  if (isNotIe && isPathUpdated) {
    littlefoot({
      buttonTemplate: `
      <button
        aria-label="Footnote <% number %>"
        class="littlefoot-footnote__button littlefoot__button"
        id="<% reference %>"
        title="See Footnote <% number %>"
        />
          <% number %>
        </button>`,
      numberResetSelector: 'article',
    })
  }
}
