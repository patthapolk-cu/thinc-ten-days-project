const express = require("express");

const {
  getAllMembersInfo, getMemberInfo, updateMemberInfo, addMemberInfo
} = require("../controllers/memberInfoControllers");

const router = express.Router();


router.route("/").get(getAllMembersInfo).post(addMemberInfo);
router.route("/:userid").get(getMemberInfo).put(updateMemberInfo);

module.exports = router;