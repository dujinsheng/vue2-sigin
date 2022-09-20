/*
 * @Date: 2022-09-17 22:52:08
 * @LastEditors: 顾森
 * @LastEditTime: 2022-09-17 23:43:56
 * @FilePath: \新建文件夹\sigin\src\utils\rulesCheck.js
 */
export function userNameCheck() {
    return [
        { required: true, message: "请输入活动名称", trigger: "blur" },
        { min: 5, max: 11, message: "长度在 3 到 5 个字符", trigger: "blur" },
    ]
    // return {
    //     required: true,
    //     message: '请输入活动名称',
    //     trigger: 'blur'
    // }
}