# Git

### git 关于配置

$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

* 三种配置: 
  - system <git安装目录>\mingw64\etc\gitconfig
  - global <用户名根目录>\.gitconfig
  - local <当前文件夹>\.git\config
* 查看所有配置 --list
* 查看某个config --get
* 添加一个config --add
* 删除一个config --unset

### git 原理
$ 四种状态, 三个区 + HEAD, Git是通过文件的哈希(SHA-1)来判断文件是否修改

$ 场景+操作

$ 场景1: 添加一个新的文件, 并且提交
  1. 新建一个文件
  2. git add <文件名>
  3. git commit -m "<用于描述提交的字符串>"

$ 场景2: 修改一个已有的文件，并且提交
  1. 修改一个文件
  2. git add <文件名>
  3. git commit -m "<用于描述提交的字符串>"

$ 场景3: 删除一个已经存在的文件
  1. git rm <文件名>
  2. git commit -m "<用于描述提交的字符串>"

$ 场景4: commit了一个文件的删除操作，后悔了，想拿回来
  1. git log找到最后一次有这个文件的commit_id
  2. git checkout <commit_id> <文件名>
  3. git commit -m "<用于描述提交的字符串>"

$ 场景5: commit了一个文件的修改操作，后悔了，想回到原来的状态
  1. git log找到修改文件的前一次commit_id
  2. git checkout <commit_id> <文件名>
  3. git commit -m "<用于描述提交的字符串>"

$ 场景6: 一个文件被add了，然后希望回到没有被add状态
  1. git reset <文件名>
  2. git rm --cached <文件名> -> 运行这个语句会真的删除stage中的文件

$ 场景7: 在工作区编辑了一个文件，希望放弃编辑，用master中当前的commit的文件覆盖工作区
  1. git checkout <文件名>

$ 场景8: 删除所有的untracked文件
  1. git clean -f <文件夹>
  2. 或者 git clean -df

$ 命令1：commit -a -> 把已有的文件，进行修改和提交，一次完成，对untracked的文件无效

$ 命令2: checkout
  1. checkout 用于将文件从右向左覆盖，从已提交的状态到stage/工作区
  2. checkout <commit_id> <文件名>
  3. checkout -- <文件名> -> 把文件从stage覆盖到工作区
  4. checkout HEAD -- <文件名> -> 用最近的提交覆盖工作区

$ 命令3: 查看
  1. status
  2. ls-files
    + -o: untracked文件
    + -m: 修改的文件
    + -s: stage有哪些文件
  3. log
    + 用于查看当前branch的所有的commit记录
    + --stat -> 列出commit的细节，提交了哪些文件
  4. show <commit_id> 查看某一个commit的具体内容
  5. reflog 列出commit名称

$ 命令4: commit的撤销
  1. 向前的撤销
  2. 向回的撤销
    + git reset --hard HEAD~1 同时覆盖stage和工作区, 把HEAD指针指向~1前一个的位置
    + git reset --soft HEAD~1 覆盖stage, 保留工作区, 把HEAD指针指向~1前一个的位置

### 远程版本管理

$ 远程主机: remote

$ 仓库的概念: repositery
  1. 从远程仓库克隆到本地: clone
  2. 自己建立一个本地仓库: init

$ 场景+操作

$ 场景1. 查看一下当时是从哪里克隆来的
  1. remote 查看remote主机的名字
  2. remote -v 查看remote主机的细节
  3. remote add/remove/rename

$ 场景2. 本地有了改动，需要同步到远端 
  1. 在本地完成版本的commit
  2. push <Remote主机名> <本地分支>:<远程分支>
