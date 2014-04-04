React = require 'react'

{script} = React.DOM


window?.GoogleAnalyticsObject ?= 'ga'
window?.ga ?= ga


# The main API function. This delegates to window[window.GoogleAnalyticsObject]
# in case Google replaces the function in their script.
ga = (args...) -> window?[window.GoogleAnalyticsObject] args...


# The ga API function implementation. This is the initial implementation that's
# usually included as part of the GA embed code. It may (or may not) be replaced
# by the loaded ga script. (Just to be safe, we don't expose it directly, but
# rather only through the function this module exports.)
window?[window.GoogleAnalyticsObject] ?= (args...) ->
  api = window[window.GoogleAnalyticsObject]
  (api.q or= []).push args
  return

scriptIsAdded = false

ga.Initializer = React.createClass
  displayName: 'GAInitializer'
  componentDidMount: ->
    window[window.GoogleAnalyticsObject].l = new Date().getTime()
    @addScript() unless scriptIsAdded
  addScript: ->
    # script tags added in `render()` aren't evaluated so we need to mutate the
    # DOM.
    scriptIsAdded = true
    el = document.createElement 'script'
    el.type = 'text/javascript'
    el.async = true
    el.src = '//www.google-analytics.com/analytics.js'
    s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore el, s
  render: ->
    # We don't want this component to render anything that will affect layout,
    # so we use an empty script tag.
    (script null)


module.exports = ga