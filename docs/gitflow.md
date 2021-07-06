- Production 分支
就是常用的 Master 分支，这个分支包含最近发布到生产环境的代码，最近发布的 Release， 这个分支只能从其他分支合并，不能在这个分支直接修改。

- Develop 分支
这个分支是的主开发分支，包含所有要发布到下一个 Release 的代码，这个主要合并于其他分支，比如 Feature 分支。

- Feature 分支
这个分支主要是用来开发一个新的功能，一旦开发完成，合并回 Develop 分支，并进入下一个 Release。

- Release 分支
当需要发布一个新 Release 的时候，基于 Develop 分支创建一个 Release 分支，完成 Release 后，合并到 Master 和 Develop 分支。

- Hotfix 分支
当在 Production 发现新的 Bug 时候，需要创建一个 Hotfix 分支, 完成修复后，合并回 Master 和 Develop 分支，所以 Hotfix 的改动会进入下一个 Release。
