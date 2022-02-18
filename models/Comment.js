module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        // 스키마 정의
        comment_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Comment", // 테이블 이름
        timestamps: true, // createAt & updateAt 활성화
        paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    })


    // Comment.associate = (db) => {
    //     db.Comment.belongsTo(db.User)
    //     db.Comment.belongsTo(db.Post)
    // }
    return Comment
}