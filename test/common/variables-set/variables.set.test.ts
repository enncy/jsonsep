import { describe, it } from "mocha";
import { Jpptr } from "../../../src";

it("变量赋值测试", async () => {
    await Jpptr.execute("./test.json", { cwd: __dirname });
});
