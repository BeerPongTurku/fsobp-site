
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
                <link rel="stylesheet" href="/styles/main.css">
            </head> 
            <body>
            <div id="app"></div>

            <script src="/bundle.js"></script>
            </body>
        </html>
        `
};