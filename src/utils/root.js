const freeGlobal =
  typeof global === "object" &&
  global !== null &&
  global.Object === Object &&
  global;
const freeSelf =
  typeof self === "object" && self !== null && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function("return this")();

export default root;
