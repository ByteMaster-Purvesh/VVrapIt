const app = require('./src/app.js')
const PORT = 8080

app.listen(PORT, () => {
    console.log(`\n Server is running successfully on URL : http://localhost:${PORT}`)
})