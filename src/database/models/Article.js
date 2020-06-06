const Sequelize = require('sequelize')

class Article extends Sequelize.Model {
	static init(sequelize, DataTypes) {
		return super.init(
			{
				title: {
					type: DataTypes.STRING,
					validate: {
						notEmpty: true
					}
				},
				description: {
					type: DataTypes.STRING
				},
				content: {
					type: DataTypes.TEXT
				},
				tags: {
					type: DataTypes.TEXT
				},
				categoryId: {
					type: DataTypes.INTEGER
				},
				visitedAt: {
					type: DataTypes.DATE
				}
			},
			{ sequelize, tableName: 'Articles', modelName: 'article' }
		)
	}
	static associate(models) {
		this.myAssociation = this.belongsTo(models.Category, { onDelete: 'cascade' })
	}
}

module.exports = Article
