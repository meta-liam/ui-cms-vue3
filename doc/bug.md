# bug池

## 2022-08

- 权限修改时，绑定有问题;
  [参考](https://element-plus.gitee.io/zh-CN/component/tree.html#%E5%B1%9E%E6%80%A7)
  修复：check-strictly = "true"

- 权限绑定问题

```js
  isAllowed(permission, user, permissions)
  Utils.hasPermission = (permissions, route, user)
```

  修复：

  ```js
  user.permissions 取代 permissions
  ```
