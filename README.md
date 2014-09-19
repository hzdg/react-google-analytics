react-google-analytics
======================

Adds the Google Analytics script to your page and exposes the `ga` tracking
function as a module.

Usage:

```javascript
var ga = require('react-google-analytics');
var GAInitiailizer = ga.Initializer;

// Use the initializer to add the script to your page somewhere.
var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
        // SNIP
          <GAInitiailizer />
        // SNIP
      </div>
    );
  }
});
```

Elsewhere, use the `ga` function:

```javascript
var ga = require('react-google-analytics');
ga('create', 'UA-XXXX-Y', 'auto');
ga('send', 'pageview');
```
