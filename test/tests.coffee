{assert} = chai
ga = ReactGoogleAnalytics
{span} = React.DOM

renderComponent = (component) ->
  div = document.createElement 'div'
  document.body.appendChild div
  React.renderComponent component, div
  div

describe 'react-google-analytics', ->
  expect = chai.expect
  initializer = new ga.Initializer
  it 'adds the google analytics script tags if it does not exist', () ->
    scriptIsAdded = false
    renderComponent initializer
    expect($('div').find('script').length).to.equal(1)

  it 'does not add the google analytics script tags if it does exist', () ->
    scriptIsAdded = true
    expect($('div').find('script').length).to.equal(1)