import app from './src';

const config = app.getConfig()
const PORT = config.get('PORT')

app.listen(PORT, _ => console.log(`server started, listening to ${PORT}`))