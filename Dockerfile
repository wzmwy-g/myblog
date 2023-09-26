# 使用 Node.js 18 作为基础镜像
FROM node:18

# 设置容器内的工作目录
WORKDIR /app

# 复制你的应用程序文件到容器内的工作目录
COPY . /app

# 安装项目的依赖
RUN npm install

# 定义容器启动时要运行的命令
CMD ["npm", "run", "dev"]
