import { _decorator, assetManager, Component, instantiate, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("bundleload")
export class bundleload extends Component {
  start() {
    console.log("WEB MOBILE");
    assetManager.loadBundle(
      "http://192.180.2.129:4000",

      (err, bundle) => {
        console.log("Erorr", err, "Bundele", bundle);

        if (err) {
          console.log(err);
        } else {
          console.log("BUNDLE----------", bundle);
          bundle.loadDir("SpinePrefab", (err, Spine) => {
            console.log("All Prefab", Spine);
            console.log("Spine", Spine);
            let consts = [];
            consts = Spine;
            this.node.addChild(instantiate(consts[0]));
            this.node.addChild(instantiate(consts[1]));
          });
        }
      }
    );
  }

  update(deltaTime: number) {}
}
