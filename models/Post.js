module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define('Post', {
        // 스키마 정의
        post_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        img_url: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "Post", // 테이블 이름
        timestamps: true, // createAt & updateAt 활성화
        paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });

    // 유저 테이블 아이디를 외래키로 가진다.
    // 게시글에는 여러가지 댓글을 달 수 있다.
    Post.associate = (db) => {
        db.Post.hasMany(db.Comment, {
            foreignKey: {
                name: 'fk_post_id',
                allowNull: false
            },
            onDelete: 'cascade'
        })
    }
    return Post
}
