import { SmartContract, method, prop, assert } from "scrypt-ts";

export default class Demo extends SmartContract {
  @prop()
  x: bigint;

  constructor(x: bigint) {
    super(x);
    this.x = x;
  }

  @method
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }

  @method
  add(x0: bigint, x1: bigint): bigint {
    return x0 + x1;
  }
}
