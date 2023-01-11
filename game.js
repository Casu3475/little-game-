// import Phaser from "phaser";
import MainScene from "./MainScene.js";
// import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";

const config = {
  type: Phaser.AUTO,
  width: 512,
  height: 512,
  backgroundColor: "#333333",
  type: Phaser.AUTO,
  parent: "portfolio-game",
  scene: [MainScene],
  scale: { zoom: 2 },
  physics: {
    // default: "arcade",
    default: "matter",
    // arcade: {
    matter: {
      debug: true,
      gravity: { y: 0 },
    },
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin, // The plugin class
        key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterCollision", // Where to store in the Scene, e.g. scene.matterCollision
      },
    ],
  },
};

new Phaser.Game(config);
