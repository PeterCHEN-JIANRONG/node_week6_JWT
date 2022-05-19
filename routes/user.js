var express = require("express");
var router = express.Router();
const UserController = require("../controllers/user");
const handleErrorAsync = require("../services/handleErrorAsync");
const { isAuth } = require("../services/auth");

// 取得單筆 by Id
// router.get("/user/:id", handleErrorAsync(UserController.getOneById));

// 新增
router.post("/user/", handleErrorAsync(UserController.createOne));

// 刪除單筆 by Id
router.delete("/user/:id", handleErrorAsync(UserController.deleteOneById));

// 更新 by Id
router.patch("/user/:id", handleErrorAsync(UserController.updateOneById));

// 取得全部
router.get("/users/", handleErrorAsync(UserController.getAll));

// 刪除全部
router.delete("/users/", handleErrorAsync(UserController.deleteAll));

// 用戶註冊
router.post("/user/sign_up", handleErrorAsync(UserController.signUp));

// 用戶註冊
router.post("/user/sign_in", handleErrorAsync(UserController.signIn));

// 取得用戶資料, 需驗證 jwt登入
router.get(
  "/user/profile",
  isAuth,
  handleErrorAsync(UserController.getProfile)
);

// 用戶更新密碼
router.post(
  "/user/updatePassword",
  isAuth,
  handleErrorAsync(UserController.updatePassword)
);

module.exports = router;
