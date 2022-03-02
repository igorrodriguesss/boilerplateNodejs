const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mvc', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conexão realizada com banco de dados!')
} catch (error) {
    console.log(`Não foi possível realizar a conexão com banco de dados: ${error}`)
}