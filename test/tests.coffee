{assert} = chai
iga = ReactGoogleAnalytics
{span} = React.DOM

renderComponent = (component) ->
  div = document.createElement 'div'
  div.style.display = 'none'
  document.body.appendChild div
  React.renderComponent component, div
  div

describe 'react-google-analytics', ->
  it 'checks if google analytics script has been added', (done) ->
    renderComponent(iga)
    s = document.getElementsByTagName('script')[0]
    expect($(document).find(s).length).toEqual(1)  
  