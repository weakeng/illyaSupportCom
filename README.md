# IllyaSupportCom 伊莉雅应援网站

    网站地址
    https://illya-support.weivird.com/

    网站已经将近开发完成 线上地址可以访问
    魔法少女☆伊莉雅同人爱好者网站
    中国地区応援サイト

    QQgroup : 700958668

### 云监工和催坑
    在线Api文档地址
    https://illya-support.weivird.com/docs/api/

### 已完成功能接口和进度
https://illya-support.weivird.com/docs/api/ 在线文档
![Image text](/image/5.png)

### 开源说明
    开源仅仅为了利于入门开发者参考 并非代表程序开放二次使用

### 项目说明

    该网站是作者Weivi自主开发的大陆地区伊莉雅应援网站
    主要用于聚合国内可播放伊莉雅的源网站 以及一些伊莉雅相关的资源下载

### 制作声明
    [网站属于非盈利性质]
        设计 Weivi
        前端开发 Weivi
        后端开发 Weivi
        产品 Weivi
    
    [文件结构说明]
        Api 后端程序
        Design 设计
            PSD 网站页面设计
            emmx 系统设计稿
        Product 由于全部自我完成设计和开发 所以不考虑绘制原型
        Web 前端
        ini 服务器配置文件
        SSL https证书
        Image README文件贴图文件夹


    [程序说明]
        项目采用了flask_docs生成在线文档
        运行后/docs/api/在线文档地址

    [数据库迁移方法]
        python manager.py db init
        python manager.py db migrate
        python manager.py db upgrade

### 项目技术

> 前端

    Vue element

> 后端

    Flask Python3.7

> 数据库

    Mysql Redis

> 部署

    MaridDB Uwsgi Supervisord Nginx