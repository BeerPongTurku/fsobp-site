
/**
 * initialState must be JSON string
 */
export default ({ title }) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${title}</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1">
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link href="styles/main.css" rel="stylesheet">
                <script>
                  (function (i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                      (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date(); a = s.createElement(o),
                      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                  ga('create', 'UA-92568008-3', 'auto');
                  ga('send', 'pageview');
                </script>
            </head> 
            <body>
            <div id="app"></div>

            <script src="scripts/bundle.js"></script>
            </body>
        </html>
        `
};